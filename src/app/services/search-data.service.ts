import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {

  public isSearchOpen = new BehaviorSubject<boolean>(false);
  public openSearchOptions = new BehaviorSubject<boolean>(false);

  constructor() { }

  closeMenu() {
    this.isSearchOpen.next(false);
    this.openSearchOptions.next(false);
  }

  openMenu() {
    this.isSearchOpen.next(true);
  }

  optionsMenu() {
    this.openSearchOptions.next(true);
  }
}
