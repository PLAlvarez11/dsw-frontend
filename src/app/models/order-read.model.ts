export interface OrderRead {
  id: number;
  personName: string;
  orderDate: string;
  details: { itemName: string; quantity: number }[];
}
