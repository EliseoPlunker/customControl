import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { CustomLibComponent } from './custom-lib/custom-lib.component';
import { CheckBoxGroupComponent } from './check-box-group/check-box-group.component';
import { DropDownTableComponent } from './drop-down-table/dropdown-table.component';
import { DropDownTableColDef } from './drop-down-table/dropdown-table-col-def.component';

@NgModule({
  declarations: [CustomLibComponent,CheckBoxGroupComponent,DropDownTableColDef,DropDownTableComponent],
  imports: [ FormsModule,ReactiveFormsModule,BrowserModule
  ],
  exports: [CustomLibComponent,CheckBoxGroupComponent,DropDownTableColDef,DropDownTableComponent]
})
export class CustomLibModule { }
