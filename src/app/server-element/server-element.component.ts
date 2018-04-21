import { 
  Component, 
  OnInit , 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges, 
  DoCheck,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  AfterContentChecked,
  OnDestroy
} from '@angular/core';

import { element } from 'protractor';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'] ,
  /* encapsulation: ViewEncapsulation.None */
  
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
  {
  @Input('srvElement') element: {  type: string, name: string, content: string  };
  @Input() name: string;
  constructor() {
    console.log("constructor called");
   }

  ngOnChanges(changes: SimpleChanges){
    console.log("ng onChanges called");
    console.log(changes);
  }
  ngOnInit() {
    console.log("ngonint called");
  }
  ngDoCheck(){
    console.log("DoCheck called !");
  }
  ngAfterContentInit(){
    console.log("after content init called !");
  }
  ngAfterContentChecked() {
    console.log("after content checked  called !");
  }
  ngAfterViewInit(){
    console.log("after View init called !");
  }
  ngAfterViewChecked(){
    console.log("after view checked called !");
  }
  ngOnDestroy(){
    console.log("after onDestroy called !")
  }


}
