import { Component, Input, forwardRef,ElementRef } from '@angular/core';
import { ControlValueAccessor,  AbstractControl, ValidationErrors,NG_VALUE_ACCESSOR,NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'check-box-group',
  template: `
      <ng-container *ngFor="let item of source;let i=index;let last=last">
      <label *ngIf="customClass" class="container" [ngClass]="{'last':last}">
                <input id="{{_name+''+i}}" [attr.disabled]="_isDisabled?true:null"
             type="checkBox" [ngModel]="_selectedItems[i]"
             (ngModelChange)="setValue($event,i)" (focus)="_isFocused[i]=true" (blur)="_isFocused[i]=false;onTouched()">
<span [ngClass]="{'disabled':_isDisabled}">{{item[_col]}}</span>
          <span class="checkmark" [ngClass]="{'focused':_isFocused[i],'disabled':_isDisabled}"></span>
      </label>
      <div  *ngIf="!customClass" [ngClass]="{'form-group':last}" class="form-check" >
         <input type="checkbox" class="form-check-input"  id="{{_name+''+i}}" [attr.disabled]="_isDisabled?true:null"
              [ngModel]="_selectedItems[i]"
             (ngModelChange)="setValue($event,i)" (blur)="onTouched()" >
         <label class="form-check-label" for="{{_name+''+i}}">{{item[_col]}}</label>
      </div>

      </ng-container>
  `,
  host: {'[class]': '(customClass ? " " + customClass : "")', },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckBoxGroupComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CheckBoxGroupComponent),
      multi: true,
    }

  ],
  styles:[`
    .focused {
       outline: black dotted thin;
    }`
  ]
})
export class CheckBoxGroupComponent implements ControlValueAccessor {

  @Input() source;
  @Input()
  set cols(value:string){
    let _cols=value.split(',')
    this._key = _cols[0];
    this._col = _cols[1]
  }
  @Input()customClass
  _selectedItems: any[] = [];
  _key: string;
  _col: string;
  _name:string="";
  _isString:boolean=false;
  _isFocused:boolean[]=[];
  _isRequired:boolean=false;
  _isDisabled:boolean=false;
  onChange;
  onTouched;

  constructor(el:ElementRef) { 
    let name=el.nativeElement.getAttribute('name');
    this._isRequired=el.nativeElement.getAttribute('isRequired')!=null?true:false;
    this._isString=el.nativeElement.getAttribute('isString')!=null?true:false;
    this._name=name?name:"ck";
    
    }
  writeValue(value: any[]|any): void {
    this._selectedItems = this._isString?
       this.propsToBoolean(value?value.split(','):""):this.propsToBoolean(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._isDisabled=isDisabled;

  }

  setValue(value: boolean, index: number) {
    this._selectedItems[index] = value;
    this.onChange(this._isString?this.booleanToProps(this._selectedItems).join(','):this.booleanToProps(this._selectedItems));

  }
  focusOut()
  {
    this.onTouched()
  }
  validate(control: AbstractControl): ValidationErrors | null{
    if (!this._isRequired)
      return null;
    if (!this._selectedItems.find(x=>x))
      return {error:"you must select one option at last"}

    return null
  }

  propsToBoolean(props): any[] {
    let propsString=props?props.map(x=>''+x):null;
    return props ? this.source.map((x: any) => propsString.indexOf(''+x[this._key]) >= 0)
      : this.source.map(x => false);

  }
  booleanToProps(propsBoolean: boolean[]) {
    let props: any[] = [];
    if (propsBoolean) {
      propsBoolean.forEach((item, index) => {
        if (item)
          props.push(this.source[index][this._key])
      })
    }
    return props;
  }

}
