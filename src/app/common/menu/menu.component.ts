import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input() user? : firebase.default.User | null; 
  @Output() onLogout : EventEmitter<boolean> = new EventEmitter();

  logout(logout : boolean){
    if(logout === true) {
      this.onLogout.emit(logout);
    }
  }
}
