import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  inputControl: FormControl = new FormControl();

  @Output()
  public onDebounce = new EventEmitter<string>();
  
  constructor(){
    this.inputControl.valueChanges.pipe(
      debounceTime(600) // milisegundos de tiempo de espera
    ).subscribe(value => {
      console.log(value);
      this.onDebounce.emit(value) 
    });
  }

}
