import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private apiUrl = 'https://api.moneycontrol.com/mcapi/sensex/index.php';

  constructor(private http: HttpClient) {}

  searchStock(query: string): Observable<any> {
    const url = `${this.apiUrl}?search=${query}`;
    return this.http.get(url);
  }

  getStockData(symbol: string): Observable<any> {
    const url = `${this.apiUrl}?symbol=${symbol}`;
    return this.http.get(url);
  }
}
