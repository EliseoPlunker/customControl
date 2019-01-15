# eliseo-custom-lib
Some Custom Form Controls for Angular 6

**Necesary**

incluye in your angular.json bootstrap.css

**Instalation**

usage
```
 npm install eliseo-custom-lib
```
Once installed you need to import our main module
```
import {CustomLibModule} from 'eliseo-custom-lib';
@NgModule({
   ...
   imports: [CustomLibModule,...],
   ...
})
```
Controls
---

* check-box-group
* dropdown-table

check-box-group
---
```
      <check-box-group name="props" 
	        [source]="your data" 
			 cols="col1,col2" 
			 [customClass]="'class-name'" 
			 isRequired
			 isString>
```
### Claim
---
Given a data in the way [value1,value4], show a list of Checkbox to choose

### Inputs
---

* **source**     : (array of object) with two properties
* **cols**       : (string) name of the properties separated by commas
* **customClass**: (string) Optional
* **isRequired** : Optional, if include it, show an error in no selecion made
* **isString**   : Optional, if include it, the control get/return a string with the values separated by commas

### Example
---
see in [stackblitz](https://stackblitz.com/edit/checkbox-group-3jv33)

dropdown-table
---
```
        <dropdown-table [source]="sourceData" searchCol="name" (change)="function($event)">
            <col-def colName="value" colClass="col-1 text-right"></col-def>
            <col-def col colName="name"></col-def>
        </dropdown-table>
```
### Claim
---
Create a dropdown that show a table, not an unique value, but return the value of the first column of the table

### Inputs
---

* **source**     : (array of object) who want to show
* **searchCol**  : Options (by defect the first column of the object)

   #### col-def
   ---
   col-def it's used to declare the visible columns

      * **colName**  : the name of the column
      * **colClass** : the class applied to the column
      * **colHead**  : Optional, if you want a table with head

### Output
---
* **(change)**      : return the object selectionated

### Example
---
---
see in [stackblitz](https://stackblitz.com/edit/checkbox-group-3jv33)
