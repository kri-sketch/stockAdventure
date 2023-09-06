import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  searchStock(query: string) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://api.moneycontrol.com/mcapi/sensex/index.php';

  constructor(private http: HttpClient) {}

  getStockData(symbol: string): Observable<any> {
    const url = `${this.apiUrl}?symbol=${symbol}`;
    return this.http.get(url);
  }
}
