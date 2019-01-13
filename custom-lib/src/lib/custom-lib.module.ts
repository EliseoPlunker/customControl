import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { CustomLibComponent } from './custom-lib.component';
import { CheckBoxGroupComponent } from './check-box-group.component';

@NgModule({
  declarations: [CustomLibComponent,CheckBoxGroupComponent],
  imports: [ FormsModule,ReactiveFormsModule,BrowserModule
  ],
  exports: [CustomLibComponent,CheckBoxGroupComponent]
})
export class CustomLibModule { }
