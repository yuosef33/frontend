import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryServiceService} from '../../service/category-service.service';
import {Product} from '../../model/product';
import {ProductsServiceService} from '../../service/products-service.service';
import {ActivatedRoute} from '@angular/router';
import {CartOrder} from '../../model/cart-order';
import {CartOrderService} from '../../service/cart-order.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: Product[]=[];
  messageResualtEn: string="";
  messageResualtAr: string="";
  productSize: number = 0;
  pageNumber: number = 1;
  pageSize: number = 10;
  productsCollection: number=0;
  constructor(private productsService: ProductsServiceService,
              private activatedRoute:ActivatedRoute
  ,private cartOrderService:CartOrderService) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      () => {
        this.finalProducts();
      }
    )

  }

  finalProducts(){

    let idCategoryExit = this.activatedRoute.snapshot.paramMap.has('id');
    let keyExit = this.activatedRoute.snapshot.paramMap.has('key');


    if(idCategoryExit){
      let idCategory = this.activatedRoute.snapshot.paramMap.get('id');
      this.getAllProductsByCategoryId(idCategory);

    }
    else if(keyExit){
      let getkeyExit = this.activatedRoute.snapshot.paramMap.get('key');
this.getAllProductSearch(getkeyExit);
    }
    else{
      this.getAllProducts();
    }
  }


  getAllProducts(){

    this.productsService.findProductsSize().subscribe(
      data=>{
        this.productsCollection= data;
        this.productSize= data;
      }
    )


    this.productsService.getAllProducts(this.pageNumber-1,this.pageSize).subscribe(
      data=>{
        this.products = data;
      }
    )
  }

  getAllProductsByCategoryId(categoryId){

    this.productsService.findProductsSizeByCategoryId(categoryId).subscribe(
      data=>{
        this.productsCollection= data;
        this.productSize= data;
      }
    )



    this.productsService.getAllProductsByCategoryId(categoryId,this.pageNumber-1,this.pageSize).subscribe(
      data=>{
        this.products = data;
        if(this.products.length === 0){
          this.productSize = -2;
        }
      }
    )
  }


  getAllProductSearch(key){

    this.productsService.findProductsSizeByKey(key).subscribe(
      data=>{
        this.productsCollection= data;
        this.productSize= data;
      }
    )


    this.productsService.getAllProductsBykey(key,this.pageNumber-1,this.pageSize).subscribe(
      data=>{

        //@ts-ignore
        if(data && 'status' in data && data.status ==='BAD_REQUEST'){
          this.products = [];
          //@ts-ignore
          this.messageResualtEn = data.bundleMessage.message_en;
          //@ts-ignore
          this.messageResualtAr = data.bundleMessage.message_ar;
this.productSize = -1;
        }else {
          this.products = data;
        }
      }
    )
  }



  doPagination(){
    this.finalProducts();
  }


changePageSize(event:Event) {
  this.pageSize = +(<HTMLInputElement> event.target).value;
  this.finalProducts();
}

addProduct(product:Product) {
const orderCart = new CartOrder(product);
    this.cartOrderService.addProductToOrder(orderCart);

}





}
