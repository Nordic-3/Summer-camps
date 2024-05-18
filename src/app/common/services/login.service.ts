import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth: AngularFireAuth) { }

  login(email: string, psw: string){
    return this.auth.signInWithEmailAndPassword(email, psw);

  }
  logout(){
    return this.auth.signOut();
  }

  isLoggedIn(){
    return this.auth.user;
  } 
}
