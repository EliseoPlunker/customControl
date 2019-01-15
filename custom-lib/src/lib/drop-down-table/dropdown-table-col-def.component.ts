import { Component,Input,Directive,ElementRef } from '@angular/core';

@Component({
    selector: 'col-def',
    template:``
  })
  export class DropDownTableColDef {
      @Input() colName:string;
      @Input() colClass:string;
      @Input() colTitle:string;
      constructor(el:ElementRef)
      {
/*        this.colName=el.nativeElement.getAttribute('colName')      
        this.colClass=el.nativeElement.getAttribute('colClass')  
        this.colTitle=el.nativeElement.getAttribute('colTitle')  
  */      
    }
  }