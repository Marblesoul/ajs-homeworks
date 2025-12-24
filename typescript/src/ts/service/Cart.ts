import Buyable from '../domain/Buyable';
import CartItem from '../domain/CartItem';

export default class Cart {
    private _items: CartItem[] = [];

    add(item: Buyable, quantity: number = 1): void {
        const existingItem = this._items.find(cartItem => cartItem.item.id === item.id);

        if (existingItem) {
            if (this.isMultipleAllowed(item)) {
                existingItem.increaseQuantity(quantity);
            }
        } else {
            this._items.push(new CartItem(item, quantity));
        }
    }

    private isMultipleAllowed(item: Buyable): boolean {
        return (item as any).allowMultiple === true;
    }

    get items(): Buyable[] {
        return this._items.map(cartItem => cartItem.item);
    }

    get itemsWithQuantity(): CartItem[] {
        return this._items.map(item => new CartItem(item.item, item.quantity));
    }

    getTotalPrice(): number {
        return this._items.reduce((sum, cartItem) => sum + cartItem.getTotalPrice(), 0);
    }

    getTotalPriceWithDiscount(discount: number): number {
        const total = this.getTotalPrice();
        return total - (total * discount / 100);
    }

    removeById(id: number): void {
        this._items = this._items.filter(cartItem => cartItem.item.id !== id);
    }

    decreaseQuantity(id: number, amount: number = 1): boolean {
        const cartItem = this._items.find(item => item.item.id === id);
        if (!cartItem) {
            return false;
        }

        const success = cartItem.decreaseQuantity(amount);

        if (cartItem.quantity < 1) {
            this.removeById(id);
        }

        return success;
    }
}