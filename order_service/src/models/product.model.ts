export class Product {
    constructor(
        public readonly name: string,
        public readonly price: number,
        public readonly quantity: number,
        public readonly category: string,
        public readonly image: string = 'https://via.placeholder.com/150x150' // Placeholder image URL
    ) {

    }
}