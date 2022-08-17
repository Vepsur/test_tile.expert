import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { SearchDataService } from './services/search-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test_tile.expert';

  constructor(public searchService: SearchDataService) {

  }
}
