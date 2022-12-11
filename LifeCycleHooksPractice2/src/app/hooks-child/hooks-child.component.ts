import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-hooks-child',
  templateUrl: './hooks-child.component.html',
  styleUrls: ['./hooks-child.component.scss']
})
export class HooksChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input()
  dataFromParent !: string;

  @Input()
  product !: Product;

  @ContentChild("child")
  contentFromChild !: ElementRef;

  @ViewChild("childHook")
  viewChild !: ElementRef;

  consoleColor1 = "background-color: lightblue";
  consoleColor2 = "background-color: lightgrey";
  consoleColor3 = "background-color: lightpink";
  consoleColor4 = "background-color: lightgreen";
  consoleColor5 = "background-color: lightgoldenrodyellow";
  consoleColor6 = "background-color: lightseagreen";
  consoleColor7 = "background-color: orange";
  consoleColor8 = "background-color: lightskyblue";

  constructor() { 
    console.log("%c Constructor called inside child component", this.consoleColor1);
  }
  
  ngOnInit(): void {
    console.log("%c ngOnInit called inside child component", this.consoleColor2);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("%c ngOnChanges called inside child component", this.consoleColor3);
    console.log("changes : ", changes);
  }

  ngDoCheck(): void {
    console.log("%c ngDoCheck called inside child component ", this.consoleColor4);
    console.log("this.product : ", this.product);
    // console.log("this.contentFromChild : ", this.contentFromChild); //We cannot access contentFromChild here because it is not yet initialized
  }

  ngAfterContentInit(): void {
    console.log("%c ngAfterContentInit called inside child component ", this.consoleColor5);
    console.log("contentFromChild : ", this.contentFromChild);
    // this.contentFromChild.nativeElement.setAttribute("style", `color:${this.dataFromParent}`); //This will only work once when the content is initialized.
  }

  ngAfterContentChecked(): void {
    console.log("%c ngAfterContentChecked called inside child component ", this.consoleColor6);
    console.log("contentFromChild : ", this.contentFromChild);
    this.contentFromChild.nativeElement.setAttribute("style", `color:${this.dataFromParent}`);
  }

  ngAfterViewInit(): void {
    console.log("%c ngAfterViewInit called inside child component ", this.consoleColor7);
    console.log("viewChild : ", this.viewChild);
    this.viewChild.nativeElement.setAttribute("style","background-color: whitesmoke");
    // this.viewChild.nativeElement.setAttribute("style",`background-color:${this.dataFromParent}`);
  }

  ngAfterViewChecked(): void {
    console.log("%c ngAfterViewChecked called inside child component ", this.consoleColor8);
    console.log("contentFromChild : ", this.viewChild);
    this.viewChild.nativeElement.setAttribute("style",`background-color:${this.dataFromParent}`);
    console.log("------------------------------------------------");
  }

}
