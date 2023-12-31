import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { StockSearchComponent } from './stock-search/stock-search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('sidenav') sidenav?: MatSidenav;
  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }
}

