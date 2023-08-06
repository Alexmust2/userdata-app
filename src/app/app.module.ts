import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormpageComponent } from './components/form-page/formpage.component';
import { FormEditPageComponent } from './components/form-edit-page/form-edit-page.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { userReducer} from './components/store/user-data.reducer';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormpageComponent,
    FormEditPageComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({userReducer}),
    StoreDevtoolsModule.instrument({}),
    StoreModule.forFeature('MyUser', userReducer),
    ReactiveFormsModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
