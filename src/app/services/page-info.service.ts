import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { PageInfo } from '../model/page-info';
import { PAGE_INFO_DATA } from '../model/page-info-data';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {

  constructor(private router: Router) {
  }

  get url(): Observable<string> {
    return this.router.events.pipe(
      filter(data => data instanceof NavigationEnd), 
      map(data => (data as NavigationEnd).urlAfterRedirects)
    );
  }

  get id(): Observable<string> {
    return this.url.pipe(
      map(url => url.split('/')[1])
    )
  }

  get info(): Observable<PageInfo> {
    return this.id.pipe(
      map(id => PAGE_INFO_DATA.find(info => info.id === id))
    )
  }
}
