import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.scss'],
})
export class StockChartComponent implements OnInit {
  stockData: any;
  chartData: any;
  query: string = '';
  chartLabels: unknown[] | undefined;
  chartOptions: any;
  chartLegend: boolean | undefined;
  chartColors: any;
  line: any;

  constructor(private stockService: StockService) {}

  ngOnInit() {
    // Fetch initial stock data when the component initializes
    this.searchStock('AAPL'); // You can replace 'AAPL' with a default stock symbol
  }

  // Function to search for a stock by query
  searchStock(query: string) {
    this.stockService.getStockData(query).subscribe(
      (data: any) => {
        this.stockData = data;
        this.updateChartData(); // Update chart data after fetching stock data
      },
      (error) => {
        console.error('Error searching for stock:', error);
        this.stockData = null;
      }
    );
  }

  // Function to update the chart data
  updateChartData() {
    // Extract relevant data from stockData and format it for the chart
    if (this.stockData) {
      this.chartData = {
        labels: this.stockData.date, // Assuming you have date data
        datasets: [
          {
            label: 'Stock Price',
            data: this.stockData.price, // Assuming you have price data
            borderColor: 'blue',
            fill: false,
          },
        ],
      };
    }
  }
}
