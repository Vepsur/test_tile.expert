import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { SearchServiceService } from 'src/app/services/search-service.service';
import { SearchDataService } from 'src/app/services/search-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger(
      'menuAnimation', 
      [
        transition(
          ':leave', 
          [
            animate('0.5s ease-in')
          ]
        )
      ]
    )
  ]
})
export class HeaderComponent implements OnInit {

  isSearchOpen = false;

  constructor(public searchService: SearchDataService) {

  }

  ngOnInit(): void {
    this.searchService.isSearchOpen.subscribe(val => this.isSearchOpen = val);
  }

}
