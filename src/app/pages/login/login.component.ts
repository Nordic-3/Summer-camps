import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../common/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private rotuer: Router, private loading: LoginService){}

  email = new FormControl<string>('');
  psw = new FormControl<string>('');
  success = true;

  login(){
    this.loading.login(this.email.value || "", this.psw.value || "").then(cred => {
      this.rotuer.navigateByUrl('/main');
    }).catch(error => {
      this.success = false;
    });
  }
}
