import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiUrl = `${environment.apiBaseUrl}/api/person`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  add(emp: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, emp);
  }

  update(id: number, emp: Person): Observable<Person> {
    return this.http.put<Person>(`${this.apiUrl}/${id}`, emp);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
