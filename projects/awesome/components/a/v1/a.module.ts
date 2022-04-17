import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AComponent} from './a.component';
import {CModule} from '@chen_levin/awesome/components/c/v1';
import {ReactiveFormsModule} from '@angular/forms';
import {ListItemComponent} from './components/list-item.component';


@NgModule({
  declarations: [
    AComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CModule
  ],
  exports: [AComponent]
})
export class AModule { }
