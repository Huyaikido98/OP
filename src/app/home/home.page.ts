import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  ngOnInit() {}

  // public click(){
  //   console.log('onClick')
  //   localStorage.removeItem('cookie')
  //   console.log(localStorage)
  //   this.router.navigate(['/loginForm'])
  // }
}
