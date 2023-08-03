import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormEditPageComponent } from './components/form-edit-page/form-edit-page.component';
import { FormpageComponent } from './components/form-page/formpage.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'form', component: FormpageComponent },
  {path: 'form/edit', component: FormEditPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
