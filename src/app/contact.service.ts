import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private api = 'https://mailthis.to/aaronblac@gmail.com'
  constructor(private http: HttpClient) { }

  PostMessage(input: any) {
    return new Promise((resolve, reject) => {
      this.http.post(this.api,input, { responseType: 'text'}).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    })
  }
}
