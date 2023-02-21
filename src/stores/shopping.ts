import { defineStore } from 'pinia'
import { calDeliveryFee } from '@/assets/functions/calDeliveryFee'

interface ProductInfo {
    shop_id: number
    id: number
    name: string
    quantity: number
    price: number
    gram: number
    delivery_fee: number
    img: string
}

export const useShoppingStore = defineStore('shopping', {
    state: () => {
        return {
            count: 0,
            cartItems: [] as ProductInfo[],
            defaultItems: [] as ProductInfo[],
        }
    },
    getters: {
        getCartItems(): unknown {
            return this.cartItems
        }
    },
    actions: {
        increment() {
            this.count++
        },
        addToCart(item: ProductInfo) {
            console.log(item)
            const index = this.cartItems.findIndex(product => product.id === item.id)
            if (index != -1) {
                if (item.quantity == this.cartItems[index].quantity) {
                    return alert('ไม่สามารถเพิ่มได้')
                }
                this.cartItems[index].quantity += 1
                this.cartItems[index].price += item.price
                this.cartItems[index].gram += item.gram

                const checkGram = this.cartItems[index].gram
                this.cartItems[index].delivery_fee = calDeliveryFee(checkGram)
            } else {
                this.cartItems.map(product => {
                    if (product.shop_id != item.shop_id) {
                        if (confirm() == true) {
                            console.log('ร้านใหม่')
                            this.cartItems = []
                        } else {
                            return
                        }
                    }
                })
                this.cartItems.push({
                    shop_id: item.shop_id,
                    id: item.id,
                    name: item.name,
                    quantity: 1,
                    gram: item.gram,
                    price: item.price,
                    delivery_fee: 0,
                    img: item.img,
                })
                this.defaultItems.push(item)
                const checkGram = this.cartItems[this.cartItems.length - 1].gram
                this.cartItems[this.cartItems.length - 1].delivery_fee = calDeliveryFee(checkGram)
            }
        },
        removeFromCart(item: ProductInfo) {
            this.cartItems = this.cartItems.filter(product => product.id !== item.id)
        },
        submitOrder() { }
    },
})