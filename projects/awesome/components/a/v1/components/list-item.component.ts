import {Component, Input} from '@angular/core';


@Component({
  selector: 'lib-list-item',
  template: '<p [innerText]="text"></p>',
  styles: [''],
})
export class ListItemComponent {
  @Input() text!:string;
}
