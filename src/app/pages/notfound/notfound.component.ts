import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.scss'
})
export class NotfoundComponent {

  constructor(private location: Location) {}

  back(){
    this.location.back();
  }

}
