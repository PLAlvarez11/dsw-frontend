import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export interface Item {
  id: number;
  name: string;
  // agrega otros campos si tu backend tiene más (price, stock, etc.)
}

@Injectable({ providedIn: 'root' })
export class ItemService {
  private apiUrl = `${environment.apiBaseUrl}/api/item`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }
}
