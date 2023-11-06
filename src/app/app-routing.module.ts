import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth/pages/auth-page/auth-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'auth', component: AuthPageComponent, pathMatch: 'full', },
  { path: '', component: AppComponent, pathMatch: 'full', },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
