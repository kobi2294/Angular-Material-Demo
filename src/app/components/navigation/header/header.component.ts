import { LayoutService } from './../../../services/layout.service';
import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/services/page-info.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: Observable<string>;

  constructor(
    private layout: LayoutService, 
    private pageinfo: PageInfoService) { }

  async onToggleSidenav() {
    let sidenav = await this.layout.getSidenav();
    sidenav.toggle();
  }

  ngOnInit() {
    this.title = this.pageinfo.info.pipe(
      map(info => info.title)
    )

  }

}
