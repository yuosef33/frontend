import {Component, OnInit} from '@angular/core';
import {CartOrderService} from '../../service/cart-order.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit {
  totalOrderSize: number=0;
  totalOrdersPrice:number=0;
constructor(private cartOrderService:CartOrderService) {
}


getCartStatus(){
  this.cartOrderService.totalOrders.subscribe(
    data=> {
      this.totalOrderSize=data;
    }
  )
  this.cartOrderService.totalprice.subscribe(
    data=> {
      this.totalOrdersPrice=data;
    }
  )
}

  ngOnInit(): void {
  this.getCartStatus();
  }
}
