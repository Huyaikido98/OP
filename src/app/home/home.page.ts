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

  public logout(){
    console.log('onClick')
    localStorage.clear();
    console.log(localStorage)
    this.router.navigate(['/loginForm'])
  }
}
