import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutPageComponent implements OnInit{


  sidebarVisible: boolean= false;
  items: MenuItem[] = [];


  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
  
  menubarItems: MenuItem[]= [
    {
      label: '',
      icon: 'pi pi-fw pi-bars',
      command: () => { this.toggleSidebar(); },
     
    },
    {
      label: 'Cart',
      icon: 'pi pi-fw pi-shopping-cart',
      styleClass: 'justify-content: end'
    },

  ]

  ngOnInit() {
    this.items = [
        {
            label: 'Users',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'Admin',
                    icon: 'pi pi-fw pi-user-plus',
                    routerLink: '/admin/products'
                },
            ]
        },
    ];
}

}
