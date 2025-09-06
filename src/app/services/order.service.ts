import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Order, OrderRead } from '../models/order.model';


@Injectable({ providedIn: 'root' })
export class OrderService {
  private apiUrl = `${environment.apiBaseUrl}/api/order`;

  constructor(private http: HttpClient) {}

  createOrder(order: Order): Observable<OrderRead> {
    return this.http.post<OrderRead>(this.apiUrl, order);
  }

  getOrders(): Observable<OrderRead[]> {
    return this.http.get<OrderRead[]>(this.apiUrl);
  }
}
