import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  saveOrderUrl="http://localhost:9092/requestorder/saveOrder";



  constructor(private http: HttpClient) { }



  createOrder(totalQuantity,totalPrice,products) :Observable<any>{
    return this.http.post(this.saveOrderUrl,{totalQuantity,totalPrice,products}).pipe(
      map(response=>response)
    )

  }


}
