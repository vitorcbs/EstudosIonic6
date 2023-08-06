import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentjsPage } from './componentjs.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentjsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentjsPageRoutingModule {}
