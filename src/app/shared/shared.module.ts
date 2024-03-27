import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { GalleriaModule } from 'primeng/galleria';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';



import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardComponent } from './components/card/card.component';
import { MinicardComponent } from './components/minicard/minicard.component';

@NgModule({
  declarations: [
    CardComponent,
    MinicardComponent,
    SearchBoxComponent,
    
  ],
  imports: [
    ButtonModule,
    CardModule,
    DataViewModule,
    DividerModule,
    DropdownModule,
    GalleriaModule,
    InputNumberModule,
    InputTextareaModule,
    InputTextModule,
    MenubarModule,
    PanelMenuModule,
    RatingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ButtonModule,
    CardComponent,
    CardModule,
    DataViewModule,
    DividerModule,
    DropdownModule,
    GalleriaModule,
    InputNumberModule,
    InputTextareaModule,
    InputTextModule,
    MenubarModule,
    MinicardComponent,
    PanelMenuModule,
    PasswordModule,
    RatingModule,
    ReactiveFormsModule,
    SearchBoxComponent,
    SidebarModule,
    TableModule,
    ToastModule,
    FormsModule,
  ]
})
export class SharedModule { }
