import { Component, OnInit } from '@angular/core';
import { Lessons } from '../models/products/lessions';

import { ServerHttpService } from '../Services/server-http.service';


@Component({
  selector: 'app-lession',
  templateUrl: './lession.page.html',
  styleUrls: ['./lession.page.scss'],
})
export class LessionPage implements OnInit {
  public lessons: Lessons[] = [];

  constructor(private serverHttp: ServerHttpService) { }

  ngOnInit() {
    this.serverHttp.getLessons().subscribe((data) =>  {
      console.log('getLessons', data);
      this.lessons = data;
    });
  }

}
