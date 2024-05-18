import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../common/services/user.service';
import { User } from '../../common/models/User';
import { Subscription } from 'rxjs';
import { ApplyService } from '../../common/services/apply.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit, OnDestroy{
  localUser = JSON.parse(localStorage.getItem('user') ||  "");
  user : User = {email : '', name : '', id : ''};
  private subscription: Subscription | undefined;
  
  ngOnInit(): void {
    this.subscription = this.userService.getUser(this.localUser.uid).subscribe((userData: User[]) => {
      if (userData.length > 0) {
        this.user = userData[0];
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  constructor(private userService : UserService, private applyService : ApplyService){
  }
}
