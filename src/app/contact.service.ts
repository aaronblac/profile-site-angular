import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class ContactService {
constructor(private http: HttpClient) { }

sendMessage(body: any) {
  return this.http.post('http://localhost:3000/sendmail', body);
}
}
