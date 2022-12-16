import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LeaveComponent } from './leave/leave.component';
import { HomeComponent } from './home/home.component';
import { EmpPersonalComponent } from './emp-personal/emp-personal.component';
import { ServicesComponent } from './services/services.component';



const appRoute: Routes = [
  {path:'', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'Leave', component: LeaveComponent},
  {path: 'EmpPersonal', component: EmpPersonalComponent},
  {path: 'Services', component: ServicesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LeaveComponent,
    HomeComponent,
    EmpPersonalComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
