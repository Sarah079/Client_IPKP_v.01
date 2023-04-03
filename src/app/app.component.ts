import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  //title = 'Client_IPKP';
  @ViewChild('sidenav', {static:true}) sidenav!: MatSidenav;

  toggleSidenav(){
    this.sidenav.toggle();
  }
}
