import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseRoutingModule } from './browse-routing.module';
import { BrowseComponent } from './browse.component';
import { CurrPipe } from '../../common/pipes/curr.pipe';
import { MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelDescription,
   MatExpansionPanelTitle } from'@angular/material/expansion';
import { MatButton } from '@angular/material/button';


@NgModule({
  declarations: [
    BrowseComponent,
    CurrPipe
  ],
  imports: [
    CommonModule,
    BrowseRoutingModule,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelDescription,
    MatExpansionPanelTitle,
    MatButton
  ]
})
export class BrowseModule { }
