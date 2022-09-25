import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayPageRoutingModule } from './play-routing.module';

import { PlayControlComponent } from 'src/app/play-control/play-control.component';

import { PlayPage } from './play.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayPageRoutingModule,
    PlayControlComponent
  ],
  declarations: [PlayPage]
})
export class PlayPageModule {}
