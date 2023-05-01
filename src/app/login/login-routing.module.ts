import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './log/log.component';
import { RegComponent } from './reg/reg.component';

const routes: Routes = [
  {
    path:'',
    component:LogComponent
  },
  {
    path:'Register',
    component:RegComponent
  },
  // {
  //   path:'',
  //   redirectTo:'/log',
  //   pathMatch:'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
