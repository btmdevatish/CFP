import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UpcomingMSliderComponent } from './components/upcoming-mslider/upcoming-mslider.component';
import { HomeComponent } from './pages/home/home.component';
import { MatchCountdownComponent } from './components/match-countdown/match-countdown.component';
import { PreviousMatchComponent } from './components/previous-match/previous-match.component';
import { CricketRankingComponent } from './components/cricket-ranking/cricket-ranking.component';
import { ArchivedBlogsComponent } from './components/archived-blogs/archived-blogs.component';
import { FooterComponent } from './components/footer/footer.component';
import { CompletedPredictionComponent } from './pages/completed-prediction/completed-prediction.component';
import { AsideBuyUpcomingMatchComponent } from './components/aside-buy-upcoming-match/aside-buy-upcoming-match.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UpcomingMSliderComponent,
    HomeComponent,
    MatchCountdownComponent,
    PreviousMatchComponent,
    CricketRankingComponent,
    ArchivedBlogsComponent,
    FooterComponent,
    CompletedPredictionComponent,
    AsideBuyUpcomingMatchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
