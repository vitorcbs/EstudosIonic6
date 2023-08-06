import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentjsPageRoutingModule } from './componentjs-routing.module';

import { ComponentjsPage } from './componentjs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentjsPageRoutingModule
  ],
  declarations: [ComponentjsPage]
})
export class ComponentjsPageModule {}
