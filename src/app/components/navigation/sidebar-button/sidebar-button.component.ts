import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidebar-button',
  templateUrl: './sidebar-button.component.html',
  styleUrls: ['./sidebar-button.component.scss']
})
export class SidebarButtonComponent implements OnInit {
  @Input()
  caption: string;

  @Input()
  icon: string;  

  @Output()
  click = new EventEmitter<any>();

  constructor(private parent: MatSidenav) {
  }

  onClick(data: any) {
    this.parent.close();
    this.click.emit(data);
  }

  ngOnInit() {
  }

}
