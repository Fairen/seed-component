import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SeedModule } from '../lib/seed/seed.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SeedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
