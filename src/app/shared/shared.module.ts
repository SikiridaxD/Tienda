import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { GalleriaModule } from 'primeng/galleria';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import { RatingModule } from 'primeng/rating';
import { DividerModule } from 'primeng/divider';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { PasswordModule } from 'primeng/password';



import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardComponent } from './components/card/card.component';
import { MinicardComponent } from './components/minicard/minicard.component';

@NgModule({
  declarations: [
    SearchBoxComponent,
    CardComponent,
    MinicardComponent,
    
  ],
  imports: [
    ButtonModule,
    CardModule,
    DropdownModule,
    GalleriaModule,
    InputNumberModule,
    InputTextareaModule,
    InputTextModule,
    MenubarModule,
    PanelMenuModule,
    RatingModule,
    ReactiveFormsModule,
    DividerModule,
    DataViewModule,
  ],
  exports: [
    ButtonModule,
    CardComponent,
    CardModule,
    DropdownModule,
    GalleriaModule,
    InputNumberModule,
    InputTextareaModule,
    InputTextModule,
    MenubarModule,
    PanelMenuModule,
    RatingModule,
    ReactiveFormsModule,
    SearchBoxComponent,
    SidebarModule,
    TableModule,
    ToastModule,
    MinicardComponent,
    DividerModule,
    DataViewModule,
    PasswordModule,
  ]
})
export class SharedModule { }
