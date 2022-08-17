import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { SearchDataService } from 'src/app/services/search-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    trigger(
      'openClose', 
      [
        transition(
          ':enter', 
          [
            style({ width: 0 }),
            animate('0.5s ease-out', 
                    style({ width: '100%' }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ width: '100%' }),
            animate('0.5s ease-in', 
                    style({ width: 0 }))
          ]
        )
      ]
    )
  ]
})
export class SearchComponent implements OnInit {
  
  isSearchOpen = false;
  openSearchOptions = false;

  constructor(public searchService: SearchDataService) { }

  ngOnInit(): void {
    this.searchService.isSearchOpen.subscribe(val => this.isSearchOpen = val);
    this.searchService.openSearchOptions.subscribe(val => this.openSearchOptions = val);
  }

}
