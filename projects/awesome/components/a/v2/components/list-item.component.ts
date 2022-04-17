import {Component, Input} from '@angular/core';


@Component({
  selector: 'lib-list-item',
  template: `<div>
    <p [innerText]="text"></p>
    <span>☘️</span>
  </div>`,
  styles: [`
    div{
      display:flex;
      align-items: center;
    }
    p{
      flex: 1 1;
    }
    span {
      flex: 0 0 50px;
    }
  `],
})
export class ListItemComponent {
  @Input() text!:string;
}
