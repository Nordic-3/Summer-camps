import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private auth: AngularFireAuth) { }

  register(email : string, psw : string){
    return this.auth.createUserWithEmailAndPassword(email, psw);
  }
}
