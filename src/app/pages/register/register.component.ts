import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../common/services/register.service';
import { Router } from '@angular/router';
import { User } from '../../common/models/User';
import { UserService } from '../../common/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  success = true;

  registerForm = new FormGroup({
    email: new FormControl(''),
    psw: new FormControl(''),
    rpsw: new FormControl(''),
    name: new FormControl('')
  });


  register(){
    this.registerForm.get('email')?.addValidators(Validators.required);
    this.registerForm.get('psw')?.addValidators(Validators.required);
    this.registerForm.get('rpsw')?.addValidators(Validators.required);
    this.registerForm.get('name')?.addValidators(Validators.required);
    
    if(this.registerForm.valid && this.registerForm.get('psw')?.value === this.registerForm.get('rpsw')?.value){
      this.save.register(this.registerForm.get('email')?.value || "", this.registerForm.get('psw')?.value || "").then(cred => {
        const user : User = {
          id: cred.user?.uid as string,
          email : this.registerForm.get('email')?.value as string,
          name : this.registerForm.get('name')?.value as string
        };
        this.userService.create(user).then(_ =>{
          this.rotuer.navigateByUrl('/main');
        }).catch(error =>{
          this.success = false;
        });
      }).catch(error => {
        this.success = false;
      });
    }
    else{
      this.success = false;
    }
  }

  constructor(private save: RegisterService, private rotuer: Router, private userService : UserService){}
}
