import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PositionComponent } from './position/position.component';
import { FlexComponent } from './flex/flex.component';
import { MarginComponent } from './margin/margin.component';

@NgModule({
  declarations: [
    AppComponent,
    PositionComponent,
    FlexComponent,
    MarginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
