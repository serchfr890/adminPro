import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const routes: Routes = [
  { path: '**', component: NoPageFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule,
    PagesRoutingModule,
    AuthRoutingModule,
  ],
})
export class AppRoutingModule { }
