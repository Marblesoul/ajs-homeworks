import Buyable from './Buyable';

export default class Gadget implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly brand: string,
        readonly model: string,
        readonly allowMultiple: boolean = true,
    ) { }
}
