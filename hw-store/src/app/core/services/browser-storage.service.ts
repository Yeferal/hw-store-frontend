import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {
  private storageSubject = new Subject<Storage>();

  constructor() {
    this.storageSubject.next(localStorage);
  }

  get storage() {
    return this.storageSubject.asObservable();
  }

}
