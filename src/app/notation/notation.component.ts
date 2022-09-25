import { Component, Input, OnInit, AfterViewChecked } from '@angular/core';
import { Subscription }   from 'rxjs';

import { NotationService } from 'src/app/Services/notation.service';
import { PianoService } from 'src/app/Services/piano.service';
import { QuizService } from 'src/app/Services/quiz.service';
import { PianoNote }  from 'src/app/core/piano-note';
import { PianoMode }  from 'src/app/core/piano-mode.enum';
import { QuizResult }  from 'src/app/core/quiz-result';

declare var $: any;

@Component({
  selector: 'notation',
  templateUrl: './notation.component.html',
  styleUrls: ['./notation.component.scss'],
})
export class NotationComponent implements OnInit, AfterViewChecked  {
  @Input() mode: PianoMode;
  subscription: Subscription;
  notationAsSVG: any;
  noteColor: string[];

  constructor(private pianoService: PianoService, private notationService: NotationService, private quizService: QuizService) {
    this.subscription = pianoService.notePlayed$.subscribe(note=>this.handleNotePlayed(note));
    quizService.quizResult$.subscribe(result=>this.handleQuizResult(result));
  }

  ngOnInit() {
    // Render the (empty) piano score (will contain hidden notes to ensure staff spans full width)
    this.notationAsSVG = this.notationService.renderNotation();
    this.noteColor = [];
  }

  ngAfterViewChecked() {
    let self=this;
    $("g.note").off().on('click', function() { self.noteClicked(this.id); });

    for(let i=0;i<this.noteColor.length; i++)
    {
      if(this.noteColor[i]) {
        $("#"+i).attr("fill", this.noteColor[i])
      }
    }
  }

  handleNotePlayed(note: PianoNote){
    if( this.mode==PianoMode.Play ) {
        this.notationService.addNote(note);
        this.notationAsSVG = this.notationService.renderNotation();
    }
  }

  handleQuizResult(result: QuizResult) {
    let color = "";
    if(result.selectedKeyId == result.actualNote.keyId){
      // Correct
      color = "#4CAF50"; // Green
    }
    else {
      // Incorrect
      color = "#f44336"; // Ref
    }
    this.noteColor.push(color);
  }

  noteClicked(id:number) {
    //console.log('noteClicked: ' + id);
    this.pianoService.playNote(this.notationService.notes[id].noteId);
  }

  clear() {
    this.noteColor.length = 0;
    this.notationService.clear();
    this.notationAsSVG = this.notationService.renderNotation();
  }

  addNote(note:PianoNote) {
    this.notationService.addNote(note);
    this.notationAsSVG = this.notationService.renderNotation();
  }
}

