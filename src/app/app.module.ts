import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockSearchComponent } from './stock-search/stock-search.component';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { AiPredictionsComponent } from './ai-predictions/ai-predictions.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    AppComponent,
    StockSearchComponent,
    StockChartComponent,
    SentimentAnalysisComponent,
    StockListComponent,
    AiPredictionsComponent,
  ],
  imports: [
    MatListModule,
    NgChartsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    [MatCardModule],
    [MatIconModule],
    [FormsModule],
    [MatFormFieldModule],
    BrowserAnimationsModule,
    [MatProgressSpinnerModule],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
