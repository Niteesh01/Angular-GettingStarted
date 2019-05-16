
import { WelcomeComponent } from './home/welcome.component';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';


import { ProductModule } from './products/product.module';

// for hash style url links , { useHash: true }

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( [{path: 'welcome', component: WelcomeComponent},
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {path: '**', redirectTo: 'welcome', pathMatch: 'full'}]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
