import { defineStore } from 'pinia'
import axiosClient from '@/utils/axios'
import router from '@/router'

interface Product {
    product_id: number
    name: string
    quantity: number
    price: number
    image_1: string
    gram: number
}

interface Shop {
    shop_id: number
    shop_name: string
    products: Product[]
    banks: Bank[]
}

interface Bank {
    bank_id: number
    commu_id: number
    bank_name: number
    back_account: string
    account_name: string
}

interface CartState {
    cart: Shop[]
}

export const useCartStore = defineStore({
    id: 'cart',
    state: (): CartState => ({
        cart: JSON.parse(localStorage.getItem('cart') || '[]'),
    }),
    actions: {
        async addProduct(shopId: number, product: Product): Promise<void> {
            const shopIndex = this.cart.findIndex((shop) => shop.shop_id === shopId)
            if (shopIndex === -1) {
                const result = await axiosClient.get('/commu/' + shopId)
                const resAllBank = await axiosClient.get('/payment/commu/' + shopId)
                this.cart.push({
                    shop_id: shopId,
                    shop_name: result.data.name,
                    products: [product],
                    banks: resAllBank.data
                })
            } else {
                const productIndex = this.cart[shopIndex].products.findIndex(
                    (p) => p.product_id === product.product_id
                )
                if (productIndex === -1) {
                    this.cart[shopIndex].products.push(product)
                } else {
                    const num = await this.checkFullQtyProduct(
                        product.product_id,
                        this.cart[shopIndex].products[productIndex].quantity + product.quantity
                    )
                    if (num === 0) return alert('ไม่สามารถเพิ่มได้ สินค้าเต็มหรืออาจหมด')
                    this.cart[shopIndex].products[productIndex].quantity += product.quantity
                }
            }
            localStorage.setItem('cart', JSON.stringify(this.cart))
        },
        async increaseQuantity(shopId: number, productId: number) {
            const shopIndex = this.cart.findIndex((shop) => shop.shop_id === shopId)
            if (shopIndex !== -1) {
                const productIndex = this.cart[shopIndex].products.findIndex(
                    (p) => p.product_id === productId
                )
                if (productIndex !== -1) {
                    const product = this.cart[shopIndex].products[productIndex]
                    const num = await this.checkFullQtyProduct(
                        productId,
                        product.quantity + 1
                    )
                    if (num === 0)
                        return alert('ไม่สามารถเพิ่มได้ สินค้าเต็มหรืออาจหมด')
                    product.quantity += 1
                    localStorage.setItem('cart', JSON.stringify(this.cart))
                }
            }
        },
        reduceQuantity(shopId: number, productId: number): void {
            const shopIndex = this.cart.findIndex((shop) => shop.shop_id === shopId)
            if (shopIndex !== -1) {
                const productIndex = this.cart[shopIndex].products.findIndex(
                    (p) => p.product_id === productId
                )
                if (productIndex !== -1) {
                    const product = this.cart[shopIndex].products[productIndex]
                    if (product.quantity > 1) {
                        product.quantity -= 1
                        localStorage.setItem('cart', JSON.stringify(this.cart))
                    }
                }
            }
        },
        deleteProduct(shopId: number, productId: number): void {
            if (confirm('คุณต้องการลบผลิตภัณฑ์นี้ ?')) {
                const shopIndex = this.cart.findIndex((shop) => shop.shop_id === shopId)
                if (shopIndex !== -1) {
                    const productIndex = this.cart[shopIndex].products.findIndex(
                        (p) => p.product_id === productId
                    )
                    if (productIndex !== -1) {
                        const product = this.cart[shopIndex].products[productIndex]
                        this.cart[shopIndex].products.splice(productIndex, 1)
                        if (this.cart[shopIndex].products.length === 0) {
                            this.cart.splice(shopIndex, 1)
                        }
                        localStorage.setItem('cart', JSON.stringify(this.cart))
                    }
                }
                router.go(0)
            }

        },
        clearCart(): void {
            this.cart = []
            localStorage.removeItem('cart')
        },
        async checkFullQtyProduct(product_id: any, qtyOld: any): Promise<number> {
            const product = await axiosClient.get('/products/' + product_id)
            if (qtyOld > product.data.quantity) {
                return 0
            }
            return 1
        },
    },
    getters: {
        cartCount: (state) => {
            let countCart = 0
            state.cart.forEach((item) => {
                item.products.forEach(() => {
                    countCart++
                })
            })
            return countCart
        },
        getCart: (state) => {
            return state.cart
        },
    },
})
