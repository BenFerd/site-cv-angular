import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private api = 'https://mailthis.to/ben.mailthis';

  constructor(private http: HttpClient) {}

  PostMessage(input: any) {
    return this.http.post(this.api, input, { responseType: 'text' });
  }
}
