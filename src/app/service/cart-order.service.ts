import { Injectable } from '@angular/core';
import {CartOrder} from '../model/cart-order';
import {BehaviorSubject, Subject} from 'rxjs';
import {OrderService} from './order.service';


@Injectable({
  providedIn: 'root'
})
export class CartOrderService {
orders: CartOrder[] = [];
totalOrders:Subject<number>=new BehaviorSubject<number>(0);
totalprice:Subject<number>=new BehaviorSubject<number>(0);
  constructor() { }
  addProductToOrder(order:CartOrder) {
   let isExist:boolean = false;
   let existOrder:CartOrder = undefined;

if(this.orders.length>0){
  existOrder=this.orders.find(orderCart => orderCart.id ===order.id);
}
isExist=(existOrder!=undefined);

if(isExist){
  existOrder.quantity++;
}else{
  this.orders.push(order);
}

this.calculateTotals();

  }

  calculateTotals(){
    let totalElementSize:number=0;
    let totalElementPrice:number=0;

    for(let temp of this.orders){

      totalElementSize+=temp.quantity;
      totalElementPrice+= temp.price *temp.quantity;
    }
    this.totalOrders.next(totalElementSize);
    this.totalprice.next(totalElementPrice);
  }

  addorder(order:CartOrder) {
    order.quantity++;
    this.calculateTotals();
  }
  removeOrder(order: CartOrder) {
    order.quantity--;
    if(order.quantity===0){
     this.remove(order);
    }
    else{
      this.calculateTotals();
    }
  }
remove(order:CartOrder){
    const index=this.orders.findIndex(OrderCart=> OrderCart.id === order.id);
    if(index>-1){
      this.orders.splice(index,1);
    }
    this.calculateTotals();
}


}
