import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MzCardModule, MzIconModule, MzIconMdiModule } from 'ng2-materialize';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MzCardModule,
    MzIconModule,
    MzIconMdiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
