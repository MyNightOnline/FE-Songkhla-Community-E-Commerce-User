import { defineStore } from 'pinia'

interface UserInfo {
    id: number
    name: string
    quantity: number
    price: number
    gram: number
    delivery_fee: number
}

export const useShoppingStore = defineStore('shopping', {
    state: () => {
        return {
            count: 0,
            cartItems: [] as UserInfo[],
            defaultItems: [] as UserInfo[],
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
        addToCart(item: UserInfo) {
            const index = this.cartItems.findIndex(product => product.id === item.id)
            if (index !== -1) {
                if (item.quantity == this.cartItems[index].quantity) {
                    return alert('ไม่สามารถเพิ่มได้')
                }
                this.cartItems[index].quantity += 1
                this.cartItems[index].price += item.price
                this.cartItems[index].gram += item.gram

                const checkGram = this.cartItems[index].gram
                if (checkGram > 0 && checkGram <= 20) this.cartItems[index].delivery_fee = 32
                else if (checkGram > 20 && checkGram <= 100) this.cartItems[index].delivery_fee = 37
                else if (checkGram > 100 && checkGram <= 250) this.cartItems[index].delivery_fee = 42
                else if (checkGram > 250 && checkGram <= 500) this.cartItems[index].delivery_fee = 52
                else if (checkGram > 500 && checkGram <= 1000) this.cartItems[index].delivery_fee = 67
                else if (checkGram > 1000 && checkGram <= 1500) this.cartItems[index].delivery_fee = 82
                else if (checkGram > 1500 && checkGram <= 2000) this.cartItems[index].delivery_fee = 97
                else if (checkGram > 2000 && checkGram <= 2500) this.cartItems[index].delivery_fee = 105

            } else {
                this.cartItems.push({
                    id: item.id,
                    name: item.name,
                    quantity: 1,
                    gram: item.gram,
                    price: item.price,
                    delivery_fee: 0
                })
                this.defaultItems.push(item)
                const checkGram = this.cartItems[this.cartItems.length - 1].gram
                if (checkGram > 0 && checkGram <= 20) this.cartItems[this.cartItems.length - 1].delivery_fee = 32
                else if (checkGram > 20 && checkGram <= 100) this.cartItems[this.cartItems.length - 1].delivery_fee = 37
                else if (checkGram > 100 && checkGram <= 250) this.cartItems[this.cartItems.length - 1].delivery_fee = 42
            }
        },
        removeFromCart(item: UserInfo) {
            this.cartItems = this.cartItems.filter(product => product.id !== item.id)
        }
    },
})
