import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';
import {map} from 'rxjs/operators';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  BaseUrl="http://localhost:9092/Products";
  productUrl='http://localhost:9092/Products/GetAllProduct/';
  productByIdUrl='http://localhost:9092/Products/GetAllproductsByCategoryId/';
  productBySearch='http://localhost:9092/Products/searchBynameOrDesc/';

  constructor(private http: HttpClient) { }


  getAllProducts(pageNumber,pageSize): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl + "pageNumber/"+pageNumber+"/pageSize/"+pageSize).pipe(
      map(
        response => response
      )
    )

  }

  getAllProductsByCategoryId(categoryId,pageNumber,pageSize): Observable<Product[]> {
    return this.http.get<Product[]>(this.productByIdUrl + categoryId +"/pageNumber/"+pageNumber+"/pageSize/"+pageSize).pipe(
      map(
        response => response
      )
    )

  }
  getAllProductsBykey(key,pageNumber,pageSize): Observable<Product[]> {
    return this.http.get<Product[]>(this.productBySearch + key +"/pageNumber/"+pageNumber+"/pageSize/"+pageSize).pipe(
      map(
        response => response
      )
    )

  }


  findProductsSize(): Observable<number> {
    return this.http.get<number>(this.BaseUrl+ "/FindProductSize").pipe(
      map(
        response => response
      )
    )

  }


  findProductsSizeByCategoryId(id): Observable<number> {
    return this.http.get<number>(this.BaseUrl+"/FindProductSizeByCategoryId/"+ id).pipe(
      map(
        response => response
      )
    )

  }


  findProductsSizeByKey(key): Observable<number> {
    return this.http.get<number>(this.BaseUrl+"/FindProductSizeByKey/"+ key).pipe(
      map(
        response => response
      )
    )

  }




}
