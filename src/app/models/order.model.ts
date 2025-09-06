export interface Order {
  id?: number;
  personId: number;
  details: OrderDetail[];
}

export interface OrderDetail {
  itemId: number;
  quantity: number;
}

export interface OrderRead {
  id: number;
  personName: string;
  orderDate: string;
  details: { itemName: string; quantity: number }[];
}
