import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://cloud-api-test.herokuapp.com/api/v1';
  }

  getAll(): Promise<any[]> {
    return this.httpClient.get<any[]>( `${this.baseUrl}/users` ).toPromise();
  }

  getUserById(id: number): Promise<any[]> {
    return this.httpClient.get<any[]>( `${this.baseUrl}/users/${id}` ).toPromise();
  }

  getCountries(): Promise<any[]> {
    return this.httpClient.get<any[]>( `${this.baseUrl}/addresses/get_countries` ).toPromise();
  }

  create(user: any): Promise<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/users`, user).toPromise();
  }

  update(id: number, user: any): Promise<any> {
    return this.httpClient.patch<any>(`${this.baseUrl}/users/${id}`, user).toPromise();
  }

  delete(id: number): Promise<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/users/${id}`).toPromise();
  }
}
