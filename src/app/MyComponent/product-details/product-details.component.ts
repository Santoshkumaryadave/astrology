import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }
 countValue:number=1 
  ngOnInit(): void {
  }

  countM(){
    this.countValue-=1


  }
  countP(){
    this.countValue+=1

  }
}
