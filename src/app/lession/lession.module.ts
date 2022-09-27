import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessionPageRoutingModule } from './lession-routing.module';

import { LessionPage } from './lession.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LessionPageRoutingModule
  ],
  declarations: [LessionPage]
})
export class LessionPageModule {}
