import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationsComponent } from './applications.component';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButton } from '@angular/material/button';


@NgModule({
  declarations: [
    ApplicationsComponent
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    MatCardModule,
    MatIcon,
    MatGridListModule,
    MatButton
  ]
})
export class ApplicationsModule { }
