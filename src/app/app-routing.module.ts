import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Card2Component } from './components/card2/card2.component';
import { CarddComponent } from './components/cardd/cardd.component';

const routes: Routes = [
  {path:'',component:CarddComponent},
  {path:'back',component:Card2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
