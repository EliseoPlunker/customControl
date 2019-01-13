import { Injectable, Component, NgModule, Input, forwardRef, ElementRef, defineInjectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomLibService {
    constructor() { }
}
CustomLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CustomLibService.ctorParameters = () => [];
/** @nocollapse */ CustomLibService.ngInjectableDef = defineInjectable({ factory: function CustomLibService_Factory() { return new CustomLibService(); }, token: CustomLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CustomLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-custom-lib',
                template: `
    <p>
      custom-lib works!
    </p>
  `
            }] }
];
/** @nocollapse */
CustomLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckBoxGroupComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomLibModule {
}
CustomLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CustomLibComponent, CheckBoxGroupComponent],
                imports: [FormsModule, ReactiveFormsModule, BrowserModule
                ],
                exports: [CustomLibComponent, CheckBoxGroupComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CustomLibService, CustomLibComponent, CheckBoxGroupComponent, CustomLibModule };

//# sourceMappingURL=custom-lib.js.map