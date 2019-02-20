import { ActionsService } from './services/actions.service';
import { LayoutService } from './services/layout.service';
import { MatSidenav } from '@angular/material';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('mySidenav')
  sidenav: MatSidenav;

  latestAction: Observable<string>;

  constructor(private layout: LayoutService, private actions: ActionsService){}

  ngOnInit(): void {
    this.latestAction = this.actions.getActions();
  }

  async onToggleSidenav() {
    let sidenav = await this.layout.getSidenav();
    sidenav.toggle();
  }

  async ngAfterViewInit() {
    console.log('ng after view init of app component');
    console.log(this.sidenav);
    console.log(this.layout);
    await this.layout.registerSidenav(this.sidenav);
  }

}
