import { MatSidenav } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private sidenav: MatSidenav;

  public getSidenav(): Promise<MatSidenav> {
    return Promise.resolve(this.sidenav);
  }

  public registerSidenav(value: MatSidenav): Promise<void> {
    this.sidenav = value;
    return Promise.resolve();
  }

  constructor() { }
}
