export interface IProduct extends Record<string, any> {
  title: string;
  origin: string;
  price: number;
  currency: string;
  imageUrl: string;
}