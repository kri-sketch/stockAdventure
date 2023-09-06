import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockSearchComponent } from './stock-search/stock-search.component';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { AiPredictionsComponent } from './ai-predictions/ai-predictions.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';

const routes: Routes = [
  { path: '', redirectTo: '/stock-search', pathMatch: 'full' },
  { path: 'stock-search', component: StockSearchComponent },
  { path: 'stock-chart', component: StockChartComponent },
  { path: 'ai-predictions', component: AiPredictionsComponent },
  { path: 'sentiment-analysis', component: SentimentAnalysisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
