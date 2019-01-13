import { ElementRef } from '@angular/core';
import { ControlValueAccessor, AbstractControl, ValidationErrors } from '@angular/forms';
export declare class CheckBoxGroupComponent implements ControlValueAccessor {
    source: any;
    cols: string;
    customClass: any;
    _selectedItems: any[];
    _key: string;
    _col: string;
    _name: string;
    _isString: boolean;
    _isFocused: boolean[];
    _isRequired: boolean;
    onChange: any;
    onTouched: any;
    constructor(el: ElementRef);
    writeValue(value: any[] | any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    setValue(value: boolean, index: number): void;
    focusOut(): void;
    validate(control: AbstractControl): ValidationErrors | null;
    propsToBoolean(props: any): any[];
    booleanToProps(propsBoolean: boolean[]): any[];
}
