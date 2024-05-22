export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  quantity: number;
  image: string;
  createdAt?: Date;

  constructor(
    id: number = 0,
    name: string = '',
    description: string = '',
    price: number = 0,
    stockQuantity: number = 0,
    quantity: number = 0,
    image: string = '',
    createdAt: Date = new Date()
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.stockQuantity = stockQuantity;
    this.quantity = quantity;
    this.image = image;
    this.createdAt = createdAt;
  }
}
