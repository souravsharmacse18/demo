import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { LoginComponent } from '../Authentication/login/login.component';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
email:any;
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
  public addemail(emaill:any)
  {
    localStorage.setItem("emaile",emaill);
    console.log(emaill);
  }
  public getemail()
  {
    this.email=localStorage.getItem("emaile");
    console.log(this.email);
    if(this.email!='')
    {
    return this.email;
    
    }
  }

}