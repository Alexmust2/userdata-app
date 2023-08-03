import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormpageComponent } from './components/form-page/formpage.component';
import { FormEditPageComponent } from './components/form-edit-page/form-edit-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormpageComponent,
    FormEditPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
