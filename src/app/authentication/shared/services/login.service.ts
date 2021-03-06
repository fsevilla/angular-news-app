import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../../../environments/environment';

export interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private httpClient:HttpClient) {
  }

  login(credentials:Credentials):Observable<any> {
    const creds = {
      username:credentials.email,
      password: credentials.password
    }
    return this.httpClient.post(environment.apiUrl+'login', creds);
  }
}
