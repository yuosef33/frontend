import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryServiceService} from '../../service/category-service.service';
import {AuthService} from '../../service/security/auth.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  categories: Category[]=[];

  constructor(private categoryService: CategoryServiceService,private authService :AuthService) {

  }
  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(
      data=>{
        this.categories = data;
      }
    )
  }

  ngOnInit(): void {
    this.getAllCategories()
  }

  isUserLogin(){
    return this.authService.isUserLogin();
  }

}
