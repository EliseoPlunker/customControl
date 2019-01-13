# eliseo-custom-lib
Some Custom Form Controls for Angular 6

**Necesary**
incluye in your angular.json bootstrap.css

**Instalation**
usage
```
#code block
 npm install eliseo-custom-lib
```
Once installed you need to import our main module
```
#code block
import {CustomLibModule} from 'eliseo-custom-lib';
@NgModule({
   ...
   imports: [CustomLibModule,...],
   ...
})
```
##Controls
---
*check-box-group

##check-box-group
---
```
#code block
      <check-box-group name="props" 
	        [source]="your data" 
			 cols="col1,col2" 
			 [customClass]="'class-name'" 
			 isRequired
			 isString>
```
Claim
---
Given a data in the way [value1,value4], show a list of Checkbox to choose

Inputs
---
* **source**     : (array of object) with two properties
* **cols**       : (string) name of the properties separated by commas
* **customClass**: (string) Optional
* **isRequired** : Optional, if include it, show an error in no selecion made
* **isString**   : Optional, if include it, the control get/return a string with the values separated by commas

