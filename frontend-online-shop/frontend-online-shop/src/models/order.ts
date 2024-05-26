export interface Order {
  id: number;
  userId: number;
  createdAt: string;
  orderItems: OrderItem[];
  totalPrice: number;
}

export interface OrderItem {
  id?: number;
  productId: number;
  quantity: number;
  price: number;
}
