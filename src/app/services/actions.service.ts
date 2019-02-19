import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  private actions = new BehaviorSubject<string>('');

  public getActions(): Observable<string> {
    return this.actions.asObservable();
  }

  public onAction(name: string) : Promise<void> {
    this.actions.next(name);
    return Promise.resolve();
  }

  constructor() { }
}
