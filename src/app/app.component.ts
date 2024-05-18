import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { LoginService } from './common/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'nyari_tabor';
  page = 'main';
  user?: firebase.default.User | null;

  constructor(private rotuer: Router, private load : LoginService) {}

  ngOnInit(): void {
    this.load.isLoggedIn().subscribe(user =>{
      this.user = user;
      localStorage.setItem('user', JSON.stringify(this.user));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    })
  }
 
  changePage(selectedPage: string){
    this.page = selectedPage;
    this.rotuer.navigateByUrl(selectedPage);
  }

  showSidenav(sidenav: MatSidenav){
    sidenav.toggle();
  }
  logout(_?: boolean){
    this.load.logout().then(() => {
      
    }).catch(error => {
      console.error(error);
    });
  }
}
