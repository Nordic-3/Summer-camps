import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collectionName = 'Users';

  constructor(private afs : AngularFirestore) { }

  create(user : User){
    return this.afs.collection<User>(this.collectionName).doc(user.id).set(user);
  }

  getUser(id : string){
    return this.afs.collection<User>(this.collectionName, ref => ref.where('id', '==', id)).valueChanges();
  }

  update(user : User){
    return this.afs.collection<User>(this.collectionName).doc(user.id).set(user);
  }
}
