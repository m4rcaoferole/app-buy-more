export interface IProduct {
   id?: number;
   title: string;
   image: string;
   description: string;
   price: number;
}

export interface ListProducts extends IProduct {
   products: IProduct[];
}