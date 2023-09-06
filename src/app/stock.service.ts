import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private apiKey = 'ZMWQBDSMYE7OOJLE'; // Replace with your actual API key
  private apiUrl = 'https://www.alphavantage.co/support/#api-key';

  constructor(private http: HttpClient) {}

  // Function to search for a stock by query
  searchStock(query: string): Observable<any> {
    const url = `${this.apiUrl}?function=SYMBOL_SEARCH&keywords=${query}&apikey=${this.apiKey}`;
    return this.http.get(url);
  }

  // Function to get real-time stock data by symbol
  getStockData(symbol: string): Observable<any> {
    const url = `${this.apiUrl}?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${this.apiKey}`;
    return this.http.get(url);
  }
}
