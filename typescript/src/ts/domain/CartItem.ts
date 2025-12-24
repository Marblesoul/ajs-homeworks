import Buyable from './Buyable';

export default class CartItem {
    constructor(
        readonly item: Buyable,
        public quantity: number = 1,
    ) {
        if (quantity < 1) {
            throw new Error('Quantity must be at least 1');
        }
    }

    getTotalPrice(): number {
        return this.item.price * this.quantity;
    }

    increaseQuantity(amount: number = 1): void {
        this.quantity += amount;
    }

    decreaseQuantity(amount: number = 1): boolean {
        if (this.quantity - amount < 1) {
            return false;
        }
        this.quantity -= amount;
        return true;
    }
}
