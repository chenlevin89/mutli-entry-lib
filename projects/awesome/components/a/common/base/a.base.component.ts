import { Directive, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Directive()
export abstract class ABaseComponent {

  @Input() list: string[] = [];

  searchControl = new FormControl();
  displayList$ = this.getDisplayListObservable();


  private getDisplayListObservable() {
    return this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(term => term ? this.list.filter(curr => curr.indexOf(term) !== -1) : this.list)
      )
  }

}
