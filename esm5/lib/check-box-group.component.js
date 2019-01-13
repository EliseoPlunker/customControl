/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, forwardRef, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
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
export { CheckBoxGroupComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2stYm94LWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2N1c3RvbS1saWIvIiwic291cmNlcyI6WyJsaWIvY2hlY2stYm94LWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFDLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQTJELGlCQUFpQixFQUFDLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFIO0lBNERFLGdDQUFZLEVBQWE7UUFWekIsbUJBQWMsR0FBVSxFQUFFLENBQUM7UUFHM0IsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixjQUFTLEdBQVMsS0FBSyxDQUFDO1FBQ3hCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsZ0JBQVcsR0FBUyxLQUFLLENBQUM7O1lBS3BCLElBQUksR0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDOUMsSUFBSSxDQUFDLFdBQVcsR0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBRSxJQUFJLENBQUEsQ0FBQyxDQUFBLElBQUksQ0FBQSxDQUFDLENBQUEsS0FBSyxDQUFDO1FBQzlFLElBQUksQ0FBQyxTQUFTLEdBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUUsSUFBSSxDQUFBLENBQUMsQ0FBQSxJQUFJLENBQUEsQ0FBQyxDQUFBLEtBQUssQ0FBQztRQUMxRSxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFBLENBQUMsQ0FBQSxJQUFJLENBQUM7SUFFMUIsQ0FBQztJQXZCSCxzQkFDSSx3Q0FBSTs7Ozs7UUFEUixVQUNTLEtBQVk7O2dCQUNmLEtBQUssR0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdB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QUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7WUFDN0MsQ0FBQyxDQUFDLENBQUE7U0FDSDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBRWYsQ0FBQzs7Z0JBcEhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsODdCQWlCVDtvQkFDRCxJQUFJLEVBQUUsRUFBQyxTQUFTLEVBQUUsd0NBQXdDLEdBQUc7b0JBQzdELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxzQkFBc0IsRUFBdEIsQ0FBc0IsQ0FBQzs0QkFDckQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHNCQUFzQixFQUF0QixDQUFzQixDQUFDOzRCQUNyRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFFRjs2QkFDTyw2REFHSjtpQkFFTDs7OztnQkExQ3FDLFVBQVU7Ozt5QkE2QzdDLEtBQUs7dUJBQ0wsS0FBSzs4QkFNTCxLQUFLOztJQXFFUiw2QkFBQztDQUFBLEFBdEhELElBc0hDO1NBOUVZLHNCQUFzQjs7O0lBRWpDLHdDQUFnQjs7SUFPaEIsNkNBQW1COztJQUNuQixnREFBMkI7O0lBQzNCLHNDQUFhOztJQUNiLHNDQUFhOztJQUNiLHVDQUFnQjs7SUFDaEIsMkNBQXdCOztJQUN4Qiw0Q0FBd0I7O0lBQ3hCLDZDQUEwQjs7SUFDMUIsMENBQVM7O0lBQ1QsMkNBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBmb3J3YXJkUmVmLEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsICBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMsTkdfVkFMVUVfQUNDRVNTT1IsTkdfVkFMSURBVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2hlY2stYm94LWdyb3VwJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNvdXJjZTtsZXQgaT1pbmRleDtsZXQgbGFzdD1sYXN0XCI+XHJcbiAgICAgIDxsYWJlbCAqbmdJZj1cImN1c3RvbUNsYXNzXCIgY2xhc3M9XCJjb250YWluZXJcIiBbbmdDbGFzc109XCJsYXN0PydsYXN0JzonJ1wiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwie3tfbmFtZSsnJytpfX1cIlxyXG4gICAgICAgICAgICAgdHlwZT1cImNoZWNrQm94XCIgW25nTW9kZWxdPVwiX3NlbGVjdGVkSXRlbXNbaV1cIlxyXG4gICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50LGkpXCIgKGZvY3VzKT1cIl9pc0ZvY3VzZWRbaV09dHJ1ZVwiKGJsdXIpPVwiX2lzRm9jdXNlZFtpXT1mYWxzZTtvblRvdWNoZWQoKVwiPlxyXG57e2l0ZW1bX2NvbF19fVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIiBbbmdDbGFzc109XCJfaXNGb2N1c2VkW2ldPydmb2N1c2VkJzonJ1wiPjwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGRpdiAgKm5nSWY9XCIhY3VzdG9tQ2xhc3NcIiBbbmdDbGFzc109XCJsYXN0Pydmb3JtLWdyb3VwJzonJ1wiIGNsYXNzPVwiZm9ybS1jaGVja1wiID5cclxuICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiICBpZD1cInt7X25hbWUrJycraX19XCJcclxuICAgICAgICAgICAgICBbbmdNb2RlbF09XCJfc2VsZWN0ZWRJdGVtc1tpXVwiXHJcbiAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQsaSlcIiAoYmx1cik9XCJvblRvdWNoZWQoKVwiID5cclxuICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cInt7X25hbWUrJycraX19XCI+e3tpdGVtW19jb2xdfX08L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGAsXHJcbiAgaG9zdDogeydbY2xhc3NdJzogJyhjdXN0b21DbGFzcyA/IFwiIFwiICsgY3VzdG9tQ2xhc3MgOiBcIlwiKScsIH0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDaGVja0JveEdyb3VwQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENoZWNrQm94R3JvdXBDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH1cclxuXHJcbiAgXSxcclxuICBzdHlsZXM6W2BcclxuICAgIC5mb2N1c2VkIHtcclxuICAgICAgIG91dGxpbmU6IGJsYWNrIGRvdHRlZCB0aGluO1xyXG4gICAgfWBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja0JveEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG5cclxuICBASW5wdXQoKSBzb3VyY2U7XHJcbiAgQElucHV0KClcclxuICBzZXQgY29scyh2YWx1ZTpzdHJpbmcpe1xyXG4gICAgbGV0IF9jb2xzPXZhbHVlLnNwbGl0KCcsJylcclxuICAgIHRoaXMuX2tleSA9IF9jb2xzWzBdO1xyXG4gICAgdGhpcy5fY29sID0gX2NvbHNbMV1cclxuICB9XHJcbiAgQElucHV0KCljdXN0b21DbGFzc1xyXG4gIF9zZWxlY3RlZEl0ZW1zOiBhbnlbXSA9IFtdO1xyXG4gIF9rZXk6IHN0cmluZztcclxuICBfY29sOiBzdHJpbmc7XHJcbiAgX25hbWU6c3RyaW5nPVwiXCI7XHJcbiAgX2lzU3RyaW5nOmJvb2xlYW49ZmFsc2U7XHJcbiAgX2lzRm9jdXNlZDpib29sZWFuW109W107XHJcbiAgX2lzUmVxdWlyZWQ6Ym9vbGVhbj1mYWxzZTtcclxuICBvbkNoYW5nZTtcclxuICBvblRvdWNoZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsOkVsZW1lbnRSZWYpIHsgXHJcbiAgICBsZXQgbmFtZT1lbC5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpO1xyXG4gICAgdGhpcy5faXNSZXF1aXJlZD1lbC5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnaXNSZXF1aXJlZCcpIT1udWxsP3RydWU6ZmFsc2U7XHJcbiAgICB0aGlzLl9pc1N0cmluZz1lbC5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnaXNTdHJpbmcnKSE9bnVsbD90cnVlOmZhbHNlO1xyXG4gICAgdGhpcy5fbmFtZT1uYW1lP25hbWU6XCJja1wiO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55W118YW55KTogdm9pZCB7XHJcbiAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zID0gdGhpcy5faXNTdHJpbmc/XHJcbiAgICAgICB0aGlzLnByb3BzVG9Cb29sZWFuKHZhbHVlP3ZhbHVlLnNwbGl0KCcsJyk6XCJcIik6dGhpcy5wcm9wc1RvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICB9XHJcbiAgc2V0VmFsdWUodmFsdWU6IGJvb2xlYW4sIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkSXRlbXNbaW5kZXhdID0gdmFsdWU7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuX2lzU3RyaW5nP3RoaXMuYm9vbGVhblRvUHJvcHModGhpcy5fc2VsZWN0ZWRJdGVtcykuam9pbignLCcpOnRoaXMuYm9vbGVhblRvUHJvcHModGhpcy5fc2VsZWN0ZWRJdGVtcykpO1xyXG5cclxuICB9XHJcbiAgZm9jdXNPdXQoKVxyXG4gIHtcclxuICAgIHRoaXMub25Ub3VjaGVkKClcclxuICB9XHJcbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGx7XHJcbiAgICBpZiAoIXRoaXMuX2lzUmVxdWlyZWQpXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgaWYgKCF0aGlzLl9zZWxlY3RlZEl0ZW1zLmZpbmQoeD0+eCkpXHJcbiAgICAgIHJldHVybiB7ZXJyb3I6XCJ5b3UgbXVzdCBzZWxlY3Qgb25lIG9wdGlvbiBhdCBsYXN0XCJ9XHJcblxyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIHByb3BzVG9Cb29sZWFuKHByb3BzKTogYW55W10ge1xyXG4gICAgbGV0IHByb3BzU3RyaW5nPXByb3BzP3Byb3BzLm1hcCh4PT4nJyt4KTpudWxsO1xyXG4gICAgcmV0dXJuIHByb3BzID8gdGhpcy5zb3VyY2UubWFwKCh4OiBhbnkpID0+IHByb3BzU3RyaW5nLmluZGV4T2YoJycreFt0aGlzLl9rZXldKSA+PSAwKVxyXG4gICAgICA6IHRoaXMuc291cmNlLm1hcCh4ID0+IGZhbHNlKTtcclxuXHJcbiAgfVxyXG4gIGJvb2xlYW5Ub1Byb3BzKHByb3BzQm9vbGVhbjogYm9vbGVhbltdKSB7XHJcbiAgICBsZXQgcHJvcHM6IGFueVtdID0gW107XHJcbiAgICBpZiAocHJvcHNCb29sZWFuKSB7XHJcbiAgICAgIHByb3BzQm9vbGVhbi5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtKVxyXG4gICAgICAgICAgcHJvcHMucHVzaCh0aGlzLnNvdXJjZVtpbmRleF1bdGhpcy5fa2V5XSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiBwcm9wcztcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=