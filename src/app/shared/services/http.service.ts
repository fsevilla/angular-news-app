import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from 'src/app/authentication/shared/services/authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient, private authService:AuthenticationService) { }

  get(url) {

    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'authorization': token
    });

    return this.httpClient.get(url, {
      headers
    }); 
  }

  post(url:string, data:any) {

    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'authorization': token
    });


    return this.httpClient.post(url, data, {
      headers
    });
  }

  put(url:string, data:any):Observable<any> {
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'authorization': token
    });


    return this.httpClient.put(url, data, {
      headers
    });
  }

  delete() {

  }
}
