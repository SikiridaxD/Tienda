import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { GalleriaModule } from 'primeng/galleria';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    SearchBoxComponent,
    
  ],
  imports: [
    CommonModule,
    ToastModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
    GalleriaModule,
    InputTextModule,
    DropdownModule,
    InputTextareaModule,
    CardModule,
    InputNumberModule,
  ],
  exports: [
    ToastModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
    GalleriaModule,
    InputTextModule,
    DropdownModule,
    InputTextareaModule,
    CardModule,
    InputNumberModule,
    SearchBoxComponent,
  ]
})
export class SharedModule { }
