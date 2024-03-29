import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'heroes', component: AppComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    
  ],
 exports:[
  [RouterModule]
 ],
  declarations: []
})
export class AppRoutingModule { }

