import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApplyService } from '../../common/services/apply.service';
import { CampService } from '../../common/services/camp.service';
import { Application } from '../../common/models/Application';
import { Camp } from '../../common/models/Camp';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  private campSubscription: Subscription | undefined;
  localUser = JSON.parse(localStorage.getItem('user') || '');
  camps: Camp[] = [];

  constructor(private applyService: ApplyService, private campService: CampService, private router: Router) { }

  delete(id: string) {
    this.applyService.delete(this.localUser.uid + id)
      .then(() => {
        if (this.camps.length === 1) {
          const currentUrl = this.router.url;
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate([currentUrl]);
          });
        }

      })
      .catch(error => { });
  }


  ngOnInit(): void {
    this.subscription = this.applyService.getApplications(this.localUser.uid)
      .subscribe((applications: Application[]) => {
        const campIds = applications.map(app => app.CampId);
        this.campSubscription = this.campService.getByIds(campIds)
          .subscribe((camps: Camp[]) => {
            this.camps = camps;
          });
      });
  }



  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.campSubscription) {
      this.campSubscription.unsubscribe();
    }
  }
}
