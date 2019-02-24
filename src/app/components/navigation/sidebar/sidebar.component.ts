import { ActionsService } from './../../../services/actions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private actions: ActionsService) { }

  ngOnInit() {
  }

  async onAction(name: string) {
    await this.actions.onAction(name);
  }
}
