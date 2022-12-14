import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayPageRoutingModule } from './play-routing.module';
import { QuizInfoComponent } from '../quiz-info/quiz-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizInfoComponent,
    PlayPageRoutingModule
  ],
  declarations: []
})
export class PlayPageModule {}
