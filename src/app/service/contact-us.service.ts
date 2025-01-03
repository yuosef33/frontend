import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  saveMessageUrl="http://localhost:9092/contactinfo/save_message";

  constructor(private http: HttpClient) { }

  saveMessage(name,email,subject,message) :Observable<any>{
    return this.http.post(this.saveMessageUrl,{name,email,subject,message}).pipe(
      map(response=>response)
    )

  }

}
