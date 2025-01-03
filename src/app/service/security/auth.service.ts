import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  createClientUrl="http://localhost:9092/User/Signup";
  loginClientUrl="http://localhost:9092/User/Login";
  constructor(private http: HttpClient) { }


createClient(name, email, password, phoneNumber) :Observable<any>{
return this.http.post(this.createClientUrl,{name,email,password,phoneNumber}).pipe(
  map(response=>response)
)

  }
  loginClient(email, password) :Observable<any>{
    return this.http.post(this.loginClientUrl,{email,password}).pipe(
      map(response=>response)
    )

  }

isUserLogin(){
    return sessionStorage.getItem("token") !== undefined && sessionStorage.getItem("token") !== null ;
}
logout(){
    sessionStorage.removeItem("token");
}

  }
