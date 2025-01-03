import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ProductsComponent} from '../products/products.component';
import {AuthService} from '../../service/security/auth.service';
import {CategoryServiceService} from '../../service/category-service.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  categories: Category[]=[];
  constructor(private router: Router,private authService :AuthService,private route: Router,private categoryService: CategoryServiceService) { }
search(word){
if(word.length > 0) {
  this.router.navigateByUrl("/products/" + word);
}
else {   this.router.navigateByUrl("/products)");}
}

isUserLogin(){
    return this.authService.isUserLogin();
}
logout(){
    this.authService.logout();
  this.route.navigateByUrl("/login");
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

}
