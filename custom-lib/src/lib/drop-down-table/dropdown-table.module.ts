import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import {DropDownTableComponent} from './dropdown-table.component'
import {DropDownTableColDef} from './dropdown-table-col-def.component'


@NgModule({
  imports:[CommonModule],
  declarations: [
    DropDownTableColDef,DropDownTableComponent
  ],
  exports:[DropDownTableComponent,DropDownTableColDef],
  
})
export class DropDownModule { }
