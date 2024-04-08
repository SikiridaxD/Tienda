import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { ProductService } from 'src/app/modules/admin/products/services/product.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
  inputControl: FormControl = new FormControl();

  @Input()
  inPublic: boolean = false;

  @Output()
  public onDebounce = new EventEmitter<string>();

  constructor(private productService: ProductService, private router: Router) {
    this.inputControl.valueChanges
      .pipe(
        debounceTime(600) // milisegundos de tiempo de espera
      )
      .subscribe((value) => {
        this.onDebounce.emit(value);
      });
  }

  search() {
    if (!!this.inputControl.value && this.inPublic === true)
      this.router.navigate([`store/results/${this.inputControl.value}`]);
  }
}
