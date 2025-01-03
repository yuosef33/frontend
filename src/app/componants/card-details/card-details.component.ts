import {Component, OnInit} from '@angular/core';
import {CartOrderService} from '../../service/cart-order.service';
import {CartOrder} from '../../model/cart-order';
import {OrderService} from '../../service/order.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  ordersucsses:string=null
  orders:CartOrder[]=[];
  totalQuantity:number=0;
  totalPrice:number=0;
  constructor(private cartOrderService:CartOrderService,private orderService:OrderService,private route: Router) {
  }


  ngOnInit(): void {
    this.getCartOrders();
  }
  getCartOrders() {
    this.orders=this.cartOrderService.orders;
  }


  saveorder() {

    const ids:number []=this.cartOrderService.orders.map(product => product.id);
    this.cartOrderService.totalprice.subscribe(data=>{
      this.totalPrice=data;
    })  ;
    this.cartOrderService.totalOrders.subscribe(data=>{
      this.totalQuantity=data;
    })


    this.orderService.createOrder(this.totalQuantity,this.totalPrice,ids).subscribe(
  data => {
alert(data.code);
this.cartOrderService.orders=[];
this.orders=[];
    this.route.navigateByUrl("/products");
  //   this.ordersucsses = "the order successfully added";
  //   setTimeout(() => {
  //     this.ordersucsses = null;
  //   }, 3000);
  }
  )
  }

  addOrderQuantity(order: CartOrder) {
    this.cartOrderService.addProductToOrder(order)
  }

  minusOneorder(order: CartOrder) {
    this.cartOrderService.removeOrder(order)
  }

  deleteorder(order: CartOrder) {
    this.cartOrderService.remove(order)
  }

}


