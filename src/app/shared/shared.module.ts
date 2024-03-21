import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { GalleriaModule } from 'primeng/galleria';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
    GalleriaModule,
  ]
})
export class SharedModule { }
