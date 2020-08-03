import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {UserComponent} from './user.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [ UserComponent ],
  exports: [ UserComponent ],
  imports: [ BrowserModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UserModule { }
