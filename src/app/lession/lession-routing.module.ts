import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LessionPage } from './lession.page';

const routes: Routes = [
  {
    path: '',
    component: LessionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessionPageRoutingModule {}
