import { Injectable, Component, NgModule, Input, forwardRef, ElementRef, defineInjectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomLibService = /** @class */ (function () {
    function CustomLibService() {
    }
    CustomLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CustomLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ CustomLibService.ngInjectableDef = defineInjectable({ factory: function CustomLibService_Factory() { return new CustomLibService(); }, token: CustomLibService, providedIn: "root" });
    return CustomLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomLibComponent = /** @class */ (function () {
    function CustomLibComponent() {
    }
    /**
     * @return {?}
     */
    CustomLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CustomLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-custom-lib',
                    template: "\n    <p>\n      custom-lib works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    CustomLibComponent.ctorParameters = function () { return []; };
    return CustomLibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckBoxGroupComponent = /** @class */ (function () {
    function CheckBoxGroupComponent(el) {
        this._selectedItems = [];
        this._name = "";
        this._isString = false;
        this._isFocused = [];
        this._isRequired = false;
        /** @type {?} */
        var name = el.nativeElement.getAttribute('name');
        this._isRequired = el.nativeElement.getAttribute('isRequired') != null ? true : false;
        this._isString = el.nativeElement.getAttribute('isString') != null ? true : false;
        this._name = name ? name : "ck";
    }
    Object.defineProperty(CheckBoxGroupComponent.prototype, "cols", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var _cols = value.split(',');
            this._key = _cols[0];
            this._col = _cols[1];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    CheckBoxGroupComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._selectedItems = this._isString ?
            this.propsToBoolean(value ? value.split(',') : "") : this.propsToBoolean(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckBoxGroupComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckBoxGroupComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CheckBoxGroupComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
    };
    /**
     * @param {?} value
     * @param {?} index
     * @return {?}
     */
    CheckBoxGroupComponent.prototype.setValue = /**
     * @param {?} value
     * @param {?} index
     * @return {?}
     */
    function (value, index) {
        this._selectedItems[index] = value;
        this.onChange(this._isString ? this.booleanToProps(this._selectedItems).join(',') : this.booleanToProps(this._selectedItems));
    };
    /**
     * @return {?}
     */
    CheckBoxGroupComponent.prototype.focusOut = /**
     * @return {?}
     */
    function () {
        this.onTouched();
    };
    /**
     * @param {?} control
     * @return {?}
     */
    CheckBoxGroupComponent.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        if (!this._isRequired)
            return null;
        if (!this._selectedItems.find(function (x) { return x; }))
            return { error: "you must select one option at last" };
        return null;
    };
    /**
     * @param {?} props
     * @return {?}
     */
    CheckBoxGroupComponent.prototype.propsToBoolean = /**
     * @param {?} props
     * @return {?}
     */
    function (props) {
        var _this = this;
        /** @type {?} */
        var propsString = props ? props.map(function (x) { return '' + x; }) : null;
        return props ? this.source.map(function (x) { return propsString.indexOf('' + x[_this._key]) >= 0; })
            : this.source.map(function (x) { return false; });
    };
    /**
     * @param {?} propsBoolean
     * @return {?}
     */
    CheckBoxGroupComponent.prototype.booleanToProps = /**
     * @param {?} propsBoolean
     * @return {?}
     */
    function (propsBoolean) {
        var _this = this;
        /** @type {?} */
        var props = [];
        if (propsBoolean) {
            propsBoolean.forEach(function (item, index) {
                if (item)
                    props.push(_this.source[index][_this._key]);
            });
        }
        return props;
    };
    CheckBoxGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'check-box-group',
                    template: "\n      <ng-container *ngFor=\"let item of source;let i=index;let last=last\">\n      <label *ngIf=\"customClass\" class=\"container\" [ngClass]=\"last?'last':''\">\n                <input id=\"{{_name+''+i}}\"\n             type=\"checkBox\" [ngModel]=\"_selectedItems[i]\"\n             (ngModelChange)=\"setValue($event,i)\" (focus)=\"_isFocused[i]=true\"(blur)=\"_isFocused[i]=false;onTouched()\">\n{{item[_col]}}\n          <span class=\"checkmark\" [ngClass]=\"_isFocused[i]?'focused':''\"></span>\n      </label>\n      <div  *ngIf=\"!customClass\" [ngClass]=\"last?'form-group':''\" class=\"form-check\" >\n         <input type=\"checkbox\" class=\"form-check-input\"  id=\"{{_name+''+i}}\"\n              [ngModel]=\"_selectedItems[i]\"\n             (ngModelChange)=\"setValue($event,i)\" (blur)=\"onTouched()\" >\n         <label class=\"form-check-label\" for=\"{{_name+''+i}}\">{{item[_col]}}</label>\n      </div>\n\n      </ng-container>\n  ",
                    host: { '[class]': '(customClass ? " " + customClass : "")', },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return CheckBoxGroupComponent; }),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(function () { return CheckBoxGroupComponent; }),
                            multi: true,
                        }
                    ],
                    styles: ["\n    .focused {\n       outline: black dotted thin;\n    }"]
                }] }
    ];
    /** @nocollapse */
    CheckBoxGroupComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    CheckBoxGroupComponent.propDecorators = {
        source: [{ type: Input }],
        cols: [{ type: Input }],
        customClass: [{ type: Input }]
    };
    return CheckBoxGroupComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomLibModule = /** @class */ (function () {
    function CustomLibModule() {
    }
    CustomLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CustomLibComponent, CheckBoxGroupComponent],
                    imports: [FormsModule, ReactiveFormsModule, BrowserModule
                    ],
                    exports: [CustomLibComponent, CheckBoxGroupComponent]
                },] }
    ];
    return CustomLibModule;
}());

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