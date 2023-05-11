import axios from 'axios'
import { defineStore } from 'pinia'

interface Product {
    product_id: number
    name: string
    quantity: number
    price: number
}

interface Shop {
    shop_id: number
    products: Product[]
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
                this.cart.push({ shop_id: shopId, products: [product] })
            } else {
                const productIndex = this.cart[shopIndex].products.findIndex(
                    (p) => p.product_id === product.product_id
                )
                if (productIndex === -1) {
                    this.cart[shopIndex].products.push(product)
                } else {
                    console.log(`old: ${this.cart[shopIndex].products[productIndex].quantity}`)
                    const num = this.checkFullQtyProduct(product.product_id, this.cart[shopIndex].products[productIndex].quantity + product.quantity)
                    if (await num == 0) return alert('ไม่สามารถเพิ่มได้ สินค้าเต็มหรืออาจหมด')
                    this.cart[shopIndex].products[productIndex].quantity += product.quantity
                }
            }
            localStorage.setItem('cart', JSON.stringify(this.cart))
            console.log(JSON.parse(localStorage.getItem('cart') || '[]'))
        },
        clearCart(): void {
            this.cart = []
            localStorage.removeItem('cart')
            console.log(JSON.parse(localStorage.getItem('cart') || '[]'))
        },
        async checkFullQtyProduct(product_id: any, qtyOld: any) {
            const product = await axios.get('http://localhost:3001/api/products/' + product_id)
            if (qtyOld > product.data.quantity) {
                return 0
            }
            return 1
        }
    },
})
