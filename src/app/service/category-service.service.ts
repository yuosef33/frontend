import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from '../model/category';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  categoryUrl='http://localhost:9092/Category/GetAllCategorys';

  constructor(private http: HttpClient) { }


  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl).pipe(
      map(
        response => response
      )
    )

  }
  // getAllCategories(): Observable<Category[]> {
  //   const headers=new HttpHeaders().set('Authorization','Bearer'+ sessionStorage.getItem('token'));
  //   return this.http.get<Category[]>(this.categoryUrl,{headers}).pipe(
  //     map(
  //       response => response
  //     )
  //   )
  //
  // }


}
