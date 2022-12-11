import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnInit {

  username !: string;
  data : string = "white";
  productName !: string;
  productPrice !: number;
  product : Product = new Product();

  consoleColor1 = "background-color: blue; color: white"
  consoleColor2 = "background-color: grey; color: white"

  constructor() {
    console.log("%c Constructor called inside parent component", this.consoleColor1);
  }

  ngOnInit(): void {
    this.username = "Nisha";
    console.log("%c ngOnInit called inside parent component", this.consoleColor2);
    console.log("this.name = ", this.username);
  }

  handleData(event: any) {
    this.data = event.target.value;
  }

  updateProduct() {
    // this.product = new Product(); //This will return a new reference everytime. Due to this, ngOnChanges in the child component will be invoked. But if you don't want to this everytime, then we have another lifecycle hook in angular called ngDoCheck.
    this.product.productName = this.productName;
    this.product.productPrice = this.productPrice;
  }

}
