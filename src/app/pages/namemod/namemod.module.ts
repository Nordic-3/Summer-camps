import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NamemodRoutingModule } from './namemod-routing.module';
import { NamemodComponent } from './namemod.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    NamemodComponent
  ],
  imports: [
    CommonModule,
    NamemodRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class NamemodModule { }
