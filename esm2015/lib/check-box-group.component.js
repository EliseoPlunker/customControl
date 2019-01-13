/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, forwardRef, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
export class CheckBoxGroupComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this._selectedItems = [];
        this._name = "";
        this._isString = false;
        this._isFocused = [];
        this._isRequired = false;
        /** @type {?} */
        let name = el.nativeElement.getAttribute('name');
        this._isRequired = el.nativeElement.getAttribute('isRequired') != null ? true : false;
        this._isString = el.nativeElement.getAttribute('isString') != null ? true : false;
        this._name = name ? name : "ck";
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set cols(value) {
        /** @type {?} */
        let _cols = value.split(',');
        this._key = _cols[0];
        this._col = _cols[1];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._selectedItems = this._isString ?
            this.propsToBoolean(value ? value.split(',') : "") : this.propsToBoolean(value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
    }
    /**
     * @param {?} value
     * @param {?} index
     * @return {?}
     */
    setValue(value, index) {
        this._selectedItems[index] = value;
        this.onChange(this._isString ? this.booleanToProps(this._selectedItems).join(',') : this.booleanToProps(this._selectedItems));
    }
    /**
     * @return {?}
     */
    focusOut() {
        this.onTouched();
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        if (!this._isRequired)
            return null;
        if (!this._selectedItems.find(x => x))
            return { error: "you must select one option at last" };
        return null;
    }
    /**
     * @param {?} props
     * @return {?}
     */
    propsToBoolean(props) {
        /** @type {?} */
        let propsString = props ? props.map(x => '' + x) : null;
        return props ? this.source.map((x) => propsString.indexOf('' + x[this._key]) >= 0)
            : this.source.map(x => false);
    }
    /**
     * @param {?} propsBoolean
     * @return {?}
     */
    booleanToProps(propsBoolean) {
        /** @type {?} */
        let props = [];
        if (propsBoolean) {
            propsBoolean.forEach((item, index) => {
                if (item)
                    props.push(this.source[index][this._key]);
            });
        }
        return props;
    }
}
CheckBoxGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'check-box-group',
                template: `
      <ng-container *ngFor="let item of source;let i=index;let last=last">
      <label *ngIf="customClass" class="container" [ngClass]="last?'last':''">
                <input id="{{_name+''+i}}"
             type="checkBox" [ngModel]="_selectedItems[i]"
             (ngModelChange)="setValue($event,i)" (focus)="_isFocused[i]=true"(blur)="_isFocused[i]=false;onTouched()">
{{item[_col]}}
          <span class="checkmark" [ngClass]="_isFocused[i]?'focused':''"></span>
      </label>
      <div  *ngIf="!customClass" [ngClass]="last?'form-group':''" class="form-check" >
         <input type="checkbox" class="form-check-input"  id="{{_name+''+i}}"
              [ngModel]="_selectedItems[i]"
             (ngModelChange)="setValue($event,i)" (blur)="onTouched()" >
         <label class="form-check-label" for="{{_name+''+i}}">{{item[_col]}}</label>
      </div>

      </ng-container>
  `,
                host: { '[class]': '(customClass ? " " + customClass : "")', },
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
                styles: [`
    .focused {
       outline: black dotted thin;
    }`]
            }] }
];
/** @nocollapse */
CheckBoxGroupComponent.ctorParameters = () => [
    { type: ElementRef }
];
CheckBoxGroupComponent.propDecorators = {
    source: [{ type: Input }],
    cols: [{ type: Input }],
    customClass: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CheckBoxGroupComponent.prototype.source;
    /** @type {?} */
    CheckBoxGroupComponent.prototype.customClass;
    /** @type {?} */
    CheckBoxGroupComponent.prototype._selectedItems;
    /** @type {?} */
    CheckBoxGroupComponent.prototype._key;
    /** @type {?} */
    CheckBoxGroupComponent.prototype._col;
    /** @type {?} */
    CheckBoxGroupComponent.prototype._name;
    /** @type {?} */
    CheckBoxGroupComponent.prototype._isString;
    /** @type {?} */
    CheckBoxGroupComponent.prototype._isFocused;
    /** @type {?} */
    CheckBoxGroupComponent.prototype._isRequired;
    /** @type {?} */
    CheckBoxGroupComponent.prototype.onChange;
    /** @type {?} */
    CheckBoxGroupComponent.prototype.onTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2stYm94LWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2N1c3RvbS1saWIvIiwic291cmNlcyI6WyJsaWIvY2hlY2stYm94LWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFDLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQTJELGlCQUFpQixFQUFDLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBMEMxSCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBb0JqQyxZQUFZLEVBQWE7UUFWekIsbUJBQWMsR0FBVSxFQUFFLENBQUM7UUFHM0IsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixjQUFTLEdBQVMsS0FBSyxDQUFDO1FBQ3hCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsZ0JBQVcsR0FBUyxLQUFLLENBQUM7O1lBS3BCLElBQUksR0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDOUMsSUFBSSxDQUFDLFdBQVcsR0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBRSxJQUFJLENBQUEsQ0FBQyxDQUFBLElBQUksQ0FBQSxDQUFDLENBQUEsS0FBSyxDQUFDO1FBQzlFLElBQUksQ0FBQyxTQUFTLEdBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUUsSUFBSSxDQUFBLENBQUMsQ0FBQSxJQUFJLENBQUEsQ0FBQyxDQUFBLEtBQUssQ0FBQztRQUMxRSxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFBLENBQUMsQ0FBQSxJQUFJLENBQUM7SUFFMUIsQ0FBQzs7Ozs7SUF2QkgsSUFDSSxJQUFJLENBQUMsS0FBWTs7WUFDZixLQUFLLEdBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDdEIsQ0FBQzs7Ozs7SUFtQkQsVUFBVSxDQUFDLEtBQWdCO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFBLENBQUMsQ0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUMsQ0FBQSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7SUFDcEMsQ0FBQzs7Ozs7O0lBQ0QsUUFBUSxDQUFDLEtBQWMsRUFBRSxLQUFhO1FBQ3BDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUMsQ0FBQSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBRTVILENBQUM7Ozs7SUFDRCxRQUFRO1FBRU4sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQ2xCLENBQUM7Ozs7O0lBQ0QsUUFBUSxDQUFDLE9BQXdCO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztZQUNuQixPQUFPLElBQUksQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsRUFBRSxDQUFBLENBQUMsQ0FBQztZQUNqQyxPQUFPLEVBQUMsS0FBSyxFQUFDLG9DQUFvQyxFQUFDLENBQUE7UUFFckQsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxLQUFLOztZQUNkLFdBQVcsR0FBQyxLQUFLLENBQUEsQ0FBQyxDQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLEVBQUUsQ0FBQSxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFBLElBQUk7UUFDN0MsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25GLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWxDLENBQUM7Ozs7O0lBQ0QsY0FBYyxDQUFDLFlBQXVCOztZQUNoQyxLQUFLLEdBQVUsRUFBRTtRQUNyQixJQUFJLFlBQVksRUFBRTtZQUNoQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUNuQyxJQUFJLElBQUk7b0JBQ04sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1lBQzdDLENBQUMsQ0FBQyxDQUFBO1NBQ0g7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUVmLENBQUM7OztZQXBIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCVDtnQkFDRCxJQUFJLEVBQUUsRUFBQyxTQUFTLEVBQUUsd0NBQXdDLEdBQUc7Z0JBQzdELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixDQUFDO3dCQUNyRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzt3QkFDckQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBRUY7eUJBQ087OztNQUdKO2FBRUw7Ozs7WUExQ3FDLFVBQVU7OztxQkE2QzdDLEtBQUs7bUJBQ0wsS0FBSzswQkFNTCxLQUFLOzs7O0lBUE4sd0NBQWdCOztJQU9oQiw2Q0FBbUI7O0lBQ25CLGdEQUEyQjs7SUFDM0Isc0NBQWE7O0lBQ2Isc0NBQWE7O0lBQ2IsdUNBQWdCOztJQUNoQiwyQ0FBd0I7O0lBQ3hCLDRDQUF3Qjs7SUFDeEIsNkNBQTBCOztJQUMxQiwwQ0FBUzs7SUFDVCwyQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIGZvcndhcmRSZWYsRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyxOR19WQUxVRV9BQ0NFU1NPUixOR19WQUxJREFUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjaGVjay1ib3gtZ3JvdXAnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc291cmNlO2xldCBpPWluZGV4O2xldCBsYXN0PWxhc3RcIj5cclxuICAgICAgPGxhYmVsICpuZ0lmPVwiY3VzdG9tQ2xhc3NcIiBjbGFzcz1cImNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cImxhc3Q/J2xhc3QnOicnXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ7e19uYW1lKycnK2l9fVwiXHJcbiAgICAgICAgICAgICB0eXBlPVwiY2hlY2tCb3hcIiBbbmdNb2RlbF09XCJfc2VsZWN0ZWRJdGVtc1tpXVwiXHJcbiAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQsaSlcIiAoZm9jdXMpPVwiX2lzRm9jdXNlZFtpXT10cnVlXCIoYmx1cik9XCJfaXNGb2N1c2VkW2ldPWZhbHNlO29uVG91Y2hlZCgpXCI+XHJcbnt7aXRlbVtfY29sXX19XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiIFtuZ0NsYXNzXT1cIl9pc0ZvY3VzZWRbaV0/J2ZvY3VzZWQnOicnXCI+PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8ZGl2ICAqbmdJZj1cIiFjdXN0b21DbGFzc1wiIFtuZ0NsYXNzXT1cImxhc3Q/J2Zvcm0tZ3JvdXAnOicnXCIgY2xhc3M9XCJmb3JtLWNoZWNrXCIgPlxyXG4gICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgIGlkPVwie3tfbmFtZSsnJytpfX1cIlxyXG4gICAgICAgICAgICAgIFtuZ01vZGVsXT1cIl9zZWxlY3RlZEl0ZW1zW2ldXCJcclxuICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudCxpKVwiIChibHVyKT1cIm9uVG91Y2hlZCgpXCIgPlxyXG4gICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwie3tfbmFtZSsnJytpfX1cIj57e2l0ZW1bX2NvbF19fTwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgYCxcclxuICBob3N0OiB7J1tjbGFzc10nOiAnKGN1c3RvbUNsYXNzID8gXCIgXCIgKyBjdXN0b21DbGFzcyA6IFwiXCIpJywgfSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENoZWNrQm94R3JvdXBDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2hlY2tCb3hHcm91cENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfVxyXG5cclxuICBdLFxyXG4gIHN0eWxlczpbYFxyXG4gICAgLmZvY3VzZWQge1xyXG4gICAgICAgb3V0bGluZTogYmxhY2sgZG90dGVkIHRoaW47XHJcbiAgICB9YFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoZWNrQm94R3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gIEBJbnB1dCgpIHNvdXJjZTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBjb2xzKHZhbHVlOnN0cmluZyl7XHJcbiAgICBsZXQgX2NvbHM9dmFsdWUuc3BsaXQoJywnKVxyXG4gICAgdGhpcy5fa2V5ID0gX2NvbHNbMF07XHJcbiAgICB0aGlzLl9jb2wgPSBfY29sc1sxXVxyXG4gIH1cclxuICBASW5wdXQoKWN1c3RvbUNsYXNzXHJcbiAgX3NlbGVjdGVkSXRlbXM6IGFueVtdID0gW107XHJcbiAgX2tleTogc3RyaW5nO1xyXG4gIF9jb2w6IHN0cmluZztcclxuICBfbmFtZTpzdHJpbmc9XCJcIjtcclxuICBfaXNTdHJpbmc6Ym9vbGVhbj1mYWxzZTtcclxuICBfaXNGb2N1c2VkOmJvb2xlYW5bXT1bXTtcclxuICBfaXNSZXF1aXJlZDpib29sZWFuPWZhbHNlO1xyXG4gIG9uQ2hhbmdlO1xyXG4gIG9uVG91Y2hlZDtcclxuXHJcbiAgY29uc3RydWN0b3IoZWw6RWxlbWVudFJlZikgeyBcclxuICAgIGxldCBuYW1lPWVsLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XHJcbiAgICB0aGlzLl9pc1JlcXVpcmVkPWVsLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpc1JlcXVpcmVkJykhPW51bGw/dHJ1ZTpmYWxzZTtcclxuICAgIHRoaXMuX2lzU3RyaW5nPWVsLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpc1N0cmluZycpIT1udWxsP3RydWU6ZmFsc2U7XHJcbiAgICB0aGlzLl9uYW1lPW5hbWU/bmFtZTpcImNrXCI7XHJcbiAgICBcclxuICAgIH1cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnlbXXxhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMgPSB0aGlzLl9pc1N0cmluZz9cclxuICAgICAgIHRoaXMucHJvcHNUb0Jvb2xlYW4odmFsdWU/dmFsdWUuc3BsaXQoJywnKTpcIlwiKTp0aGlzLnByb3BzVG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gIH1cclxuICBzZXRWYWx1ZSh2YWx1ZTogYm9vbGVhbiwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWRJdGVtc1tpbmRleF0gPSB2YWx1ZTtcclxuICAgIHRoaXMub25DaGFuZ2UodGhpcy5faXNTdHJpbmc/dGhpcy5ib29sZWFuVG9Qcm9wcyh0aGlzLl9zZWxlY3RlZEl0ZW1zKS5qb2luKCcsJyk6dGhpcy5ib29sZWFuVG9Qcm9wcyh0aGlzLl9zZWxlY3RlZEl0ZW1zKSk7XHJcblxyXG4gIH1cclxuICBmb2N1c091dCgpXHJcbiAge1xyXG4gICAgdGhpcy5vblRvdWNoZWQoKVxyXG4gIH1cclxuICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbHtcclxuICAgIGlmICghdGhpcy5faXNSZXF1aXJlZClcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAoIXRoaXMuX3NlbGVjdGVkSXRlbXMuZmluZCh4PT54KSlcclxuICAgICAgcmV0dXJuIHtlcnJvcjpcInlvdSBtdXN0IHNlbGVjdCBvbmUgb3B0aW9uIGF0IGxhc3RcIn1cclxuXHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgcHJvcHNUb0Jvb2xlYW4ocHJvcHMpOiBhbnlbXSB7XHJcbiAgICBsZXQgcHJvcHNTdHJpbmc9cHJvcHM/cHJvcHMubWFwKHg9PicnK3gpOm51bGw7XHJcbiAgICByZXR1cm4gcHJvcHMgPyB0aGlzLnNvdXJjZS5tYXAoKHg6IGFueSkgPT4gcHJvcHNTdHJpbmcuaW5kZXhPZignJyt4W3RoaXMuX2tleV0pID49IDApXHJcbiAgICAgIDogdGhpcy5zb3VyY2UubWFwKHggPT4gZmFsc2UpO1xyXG5cclxuICB9XHJcbiAgYm9vbGVhblRvUHJvcHMocHJvcHNCb29sZWFuOiBib29sZWFuW10pIHtcclxuICAgIGxldCBwcm9wczogYW55W10gPSBbXTtcclxuICAgIGlmIChwcm9wc0Jvb2xlYW4pIHtcclxuICAgICAgcHJvcHNCb29sZWFuLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0pXHJcbiAgICAgICAgICBwcm9wcy5wdXNoKHRoaXMuc291cmNlW2luZGV4XVt0aGlzLl9rZXldKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb3BzO1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ==