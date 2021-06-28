

import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'app/shared/services/communication.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/reserva', title: 'reserva',  icon: 'pe-7s-map-2', class: '' },
    { path: '/user', title: 'user',  icon: 'pe-7s-user', class: '' },


];

export const ROUTESUSUARIOSC: RouteInfo[] = [
  { path: '/carpool', title: 'carpool', icon: 'pe-7s-car', class: '' },
  { path: '/maps', title: 'mapa',  icon: 'pe-7s-map-2', class: '' },
  
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private CommunicationService: CommunicationService) { }

  ngOnInit() {



      if (this.CommunicationService.rol == 1) {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
      } else {
        this.menuItems = ROUTESUSUARIOSC.filter(menuItem => menuItem);
      }

  }


  logout(): void { window.location.reload(); }




  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}




/* 

 logout(): void { window.location.reload(); }

  goUser(){
    this.router.navigate(['/user'])
  }
  goMap(){
    this.router.navigate(['/maps'])
  }
  goCalculator(){
    this.router.navigate(['/calculator'])
  }
  goCarpool(){
    this.router.navigate(['/carpool'])
  }


*/

 

 
 
 
 

