import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CompletedPredictionComponent } from './pages/completed-prediction/completed-prediction.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "complete-prediction", component: CompletedPredictionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
