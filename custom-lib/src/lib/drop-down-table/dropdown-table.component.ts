import { Component, ContentChildren, QueryList, AfterViewInit, Input, Output, EventEmitter, forwardRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DropDownTableColDef } from './dropdown-table-col-def.component'


export const DROPDOWN_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropDownTableComponent),
  multi: true,
};

export enum KEY_CODE {
  UP_ARROW = 38,
  DOWN_ARROW = 40,
  ENTER = 13,
  TAB = 8
}

@Component({
  selector: 'dropdown-table',
  templateUrl: './dropdown-table.component.html',
  styleUrls: ['./dropdown-table.component.css'],
  providers: [DROPDOWN_VALUE_ACCESSOR],
})
export class DropDownTableComponent implements ControlValueAccessor, AfterViewInit {
  @ContentChildren(DropDownTableColDef)
  items: QueryList<DropDownTableColDef>;
  @ViewChild('text')
  set element(value) {
    this.minWidth = (value.nativeElement.width || value.nativeElement.offsetWidth) + 'px';
  }

  _dataList: any[] = [{}];
  private _value: any;
  private _key: string;
  private _text: string;
  private _isArray: boolean;
  private _dataSearch: any[] = [];
  public _isDisabled:boolean=false;
  minWidth: string;

  @Input() placeHolder: string = "Select option";
  @Input() searchCol: string = null;
  visibleColumns: string[] = [];
  headersColumns: string[];
  classColumns: string[] = [];


  @Input()
  set source(value: any[]) {
    this._isArray = !(typeof value[0] === 'object')
    if (!this._isArray) {
      let columns: string[] = Object.keys(value[0]);
      this._key = columns[0];
      this._text = columns[1];
    }
    this._dataList = value;
    this._dataSearch = this._isArray ?
      this._dataList.map((x, i) => {
        return { Text: ('' + x).toUpperCase(), index: i }
      }) :
      this._dataList.map((x, i) => {
        return { Text: ('' + x[this.searchCol ? this.searchCol : this._key]).toUpperCase(), index: i }
      });
    if (this._value) {
      this.counter = this._isArray ?
        this._dataList.findIndex(p => p == this._value) :
        this._dataList.findIndex(p => p[this._key] == this._value);
      this.setValue();
    }
  }
  @Output() change: EventEmitter<any> = new EventEmitter();

  get dataList() {
    return this._dataList;
  }
  onChange;
  showDropDown: boolean;
  counter: number;
  value: string;



  writeValue(obj: any): void {
    if (this._dataList) {
      this.counter = this._isArray ?
        this._dataList.findIndex(p => p == obj) :
        this._dataList.findIndex(p => p[this._key] == obj);
      this.setValue();
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
    this._isDisabled=isDisabled
  }


  onBlurEventAction(): void {
    setTimeout(() => {
      this.showDropDown = false;
    }, 200)
  }

  onKeyDownAction(event: KeyboardEvent): void {
    event.preventDefault();
    let old_counter = this.counter;
    if (event.keyCode === KEY_CODE.UP_ARROW) {

      this.counter = (this.counter === 0) ? this.counter : --this.counter;
    } else {
      if (event.keyCode === KEY_CODE.DOWN_ARROW)
        this.counter = (this.counter === this.dataList.length - 1) ? this.counter : ++this.counter;
      else {
        if (event.keyCode === KEY_CODE.ENTER)
          this.toogleDropDown();
        else {
          if (event.keyCode > 32) {
            let search = event.key.toUpperCase();
            let index = this._dataSearch.findIndex(s => s.index > this.counter && s.Text.substring(0, 1) == search);
            if (index < 0)
              index = this._dataSearch.findIndex(s => s.Text.substring(0, 1) == search);
            if (index >= 0)
              this.counter = index;
          }
        }
      }
    }
    if (this.counter != old_counter) {
      let item = this.setValue();
      this.onChange(this._isArray ? item : item[this._key]);
      this.change.emit(item);
    }
  }
  select(index: number) {
    this.counter = index;
    let item = this.setValue();
    this.onChange(this._isArray ? item : item[this._key]);
    this.showDropDown = false;
    this.change.emit(item);
  }
  setValue() {
    let item: any = this.counter >= 0 ? this.dataList[this.counter] : null;
    this.value = item ? this._isArray ? item : item[this._text] : this.placeHolder;
    this._value = item ? this._isArray ? item : item[this._key] : null;
    return item;
  }
  toogleDropDown(): void {
    this.showDropDown = !this.showDropDown;
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.headersColumns = this.items.find(x => x.colTitle != null) ? [] : null;
      this.items.forEach((x: any, index: number) => {
        if (this.headersColumns)
          this.headersColumns[index] = x.colTitle ? x.colTitle : "";
        this.classColumns[index] = x.colClass ? x.colClass : "";
        this.visibleColumns[index] = x.colName ? x.colName : "";
      })

    })
  }


}

