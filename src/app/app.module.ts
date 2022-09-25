import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AppRoutingModule } from './app-routing.module';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { NotationComponent } from './notation/notation.component';
// import { PlayControlComponent } from './play-control/play-control.component';
import { NoteInfoComponent } from './note-info/note-info.component';
import { QuizInfoComponent } from './quiz-info/quiz-info.component';
import { PianoService } from './Services/piano.service';
import { QuizService } from './Services/quiz.service';
import { SoundService } from './Services/sound.service';
import { NotationService } from './Services/notation.service';
import { SafePipe } from './shared/safe.pipe';
import { PlayPage } from './play/play.page';


@NgModule({
  declarations: [
    PlayPage,
    AppComponent, 
    LoginFormComponent, 
    KeyboardComponent, 
    NotationComponent,
    // PlayControlComponent,
    NoteInfoComponent,
    QuizInfoComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    PianoService,
    QuizService,
    SoundService,
    NotationService,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent],
  // exports: [PlayControlComponent, NotationComponent, NoteInfoComponent],
})
export class AppModule {}
