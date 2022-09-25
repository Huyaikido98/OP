import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { ServerHttpService } from '../Services/server-http.service';


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
  constructor(private serverHttp: ServerHttpService) { }

  ngOnInit() {}

  public onSubmit(){
    console.log('onSubmit');
    const newUser = {};
    for (const controlName in this.loginForm.controls) {
      if(controlName) {
        newUser[controlName] = this.loginForm.controls[controlName].value;
      }
    }
    console.log(newUser);
    this.serverHttp.addUser(newUser).subscribe(data => {
      console.log(data);
    }); 
  }
}