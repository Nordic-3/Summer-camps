import { Component, OnDestroy, OnInit } from '@angular/core';
import { CampService } from '../../common/services/camp.service';
import { Subscription } from 'rxjs';
import { Camp } from '../../common/models/Camp';
import { ApplyService } from '../../common/services/apply.service';
import { Application } from '../../common/models/Application';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'] 
})
export class BrowseComponent implements OnInit, OnDestroy{

  success = {done: false, msg : ''};
  allCamps: Camp[] = [];
  localUser = JSON.parse(localStorage.getItem('user') ||  '');
  applied : Application = {CampId : '', UserId : ''};
  private subscription: Subscription | undefined;
  constructor(private campService : CampService, private applyService : ApplyService, private router : Router){}
  
  ngOnInit(): void {
    this.loadCamps();
  }

  loadCamps(): void {
    this.subscription = this.campService.getAll().subscribe((camps: Camp[]) => {
      this.allCamps = camps;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  apply(id: string) {
    this.applied.CampId = id;
    this.applied.UserId = this.localUser.uid;
    this.applyService.create(this.applied).then(_ => {
      this.success.done = true;
      this.success.msg = 'Sikeres foglalás!';
      this.loadCamps();
    }).catch(error => {
      this.success.done = true;
      this.success.msg = 'Sikertelen foglalás';
    });
  }

  expand(id: string): boolean{
    if(this.success.done && id === this.applied.CampId){
      return true;
    }
    return false;
  }
}
