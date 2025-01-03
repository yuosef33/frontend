import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {Chefs} from '../../model/chefs';
import {ChefsServiceService} from '../../service/chefs-service.service';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {

  chefs: Chefs[]=[];

  constructor(private chefsService: ChefsServiceService) { }
getAllChefs(){
    this.chefsService.getAllChefs().subscribe(
      data =>{
        this.chefs = data;
      }
    )
}
  ngOnInit(): void {

    this.getAllChefs()
  }
}
