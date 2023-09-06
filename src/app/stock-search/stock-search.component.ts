// Import the StockService and other necessary modules
import { Component } from '@angular/core';
import { StockService } from '../stock.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.css']
})
export class StockSearchComponent {
  query: string = '';
  searchResults: any[] = [];
  isLoading: any = false;

  constructor(private stockService: StockService, private http: HttpClient) {}

  // performStockSearch() {
  //   if (this.query.trim() === '') {
  //     return; // Don't perform an empty search
  //   }

  //   this.stockService.searchStock(this.query).subscribe(
  //     (data : any) => {
  //       // Handle the search results here
  //       this.searchResults = data.results || [];
  //     },
  //     (error: any) => {
  //       console.error('Error fetching search results', error);
  //       this.searchResults = []; // Clear results on error
  //     }
  //   );
  // }
  performStockSearch() {
    const url = `YOUR_STOCK_SEARCH_API_URLquery=${this.query}`;

    this.http.get(url).subscribe(
      (data: any) => {
        // Handle the search results here
        this.searchResults = data.results || [];
      },
      (error: any) => {
        console.error('Error fetching search results', error);
        this.searchResults = []; // Clear results on error
      }
    );
  }
}
