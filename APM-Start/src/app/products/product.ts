//using interface to specify custom type to take full advantage of typescript
//to strongly type our custom objects

export interface IProduct {

    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;

}
