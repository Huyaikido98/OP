import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { ServerHttpService } from '../Services/server-http.service';
import { Router } from '@angular/router';
import { infoLogin } from '../models/products/infoLogin';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private serverHttp: ServerHttpService, private router: Router) { }

  ngOnInit() {}

  public onSubmit() {
    console.log('onSubmit');
    const info: infoLogin[] = [];
    const newUser = {};
    for (const controlName in this.loginForm.controls) {
      if(controlName) {
        newUser[controlName] = this.loginForm.controls[controlName].value;
      }
    }
    console.log(newUser)
    this.serverHttp.userLogin(newUser).subscribe(response => {
        localStorage.setItem('info', response.info?id);
        localStorage.setItem('cookie', response.cookie);
        console.log(localStorage);
      if(response.message)
        this.router.navigate(['/']);
    }
  )}
}
