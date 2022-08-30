import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { }

  public addNewUser(user:any)
  {
    return this.http.post('http://localhost:8081/signup',user);
  }
  public userlogin(loginData:any)
  {
    return this.http.post('http://localhost:8081/login',loginData);
  }
  public bookNewSlot(bookSlot: any){
    return this.http.post('http://localhost:8081/book-slot',bookSlot);
  }
}
