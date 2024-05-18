import { Component } from '@angular/core';
import { UserService } from '../../common/services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../common/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-namemod',
  templateUrl: './namemod.component.html',
  styleUrl: './namemod.component.scss'
})
export class NamemodComponent {

  constructor(private userService : UserService, private router : Router) {}
  localUser = JSON.parse(localStorage.getItem('user') ||  '');
  user : User = {email : '', name : '', id : ''};


  modifyForm = new FormGroup({
    newName: new FormControl('')
  });

  nameModify(): void{
    this.modifyForm.get('newMail')?.addValidators(Validators.required);
    this.userService.getUser(this.localUser.uid).subscribe((userData: User[]) => {
      if (userData.length > 0) {
        this.user = userData[0];
      }
    });
    if(this.modifyForm.valid){
      const newName = this.modifyForm.get('newName')?.value;
      if (newName !== null && newName !== undefined){
        this.user.name = newName;
        this.user.id = this.localUser.uid;
        this.user.email = this.localUser.email;
        this.userService.update(this.user).then(_ =>{
          this.router.navigateByUrl('/profile');
        }).catch(error => {

        });
      }
    }
  }
}
