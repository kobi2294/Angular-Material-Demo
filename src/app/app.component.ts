import { LayoutService } from './services/layout.service';
import { MatSidenav } from '@angular/material';
import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('mySidenav')
  sidenav: MatSidenav;

  constructor(private layout: LayoutService){}

  async ngAfterViewInit() {
    console.log('ng after view init of app component');
    console.log(this.sidenav);
    console.log(this.layout);
    await this.layout.registerSidenav(this.sidenav);
  }

}
