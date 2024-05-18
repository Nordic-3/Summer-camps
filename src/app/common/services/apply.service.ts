import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Application } from '../models/Application';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplyService {

  collectionName = 'Applications';

  constructor(private afs : AngularFirestore) { }

  create(application : Application){
    return this.afs.collection<Application>(this.collectionName).doc(application.UserId + application.CampId).set(application);
  }

  getApplications(userId: string): Observable<Application[]> {
    return this.afs.collection<Application>(this.collectionName, ref => ref.where('UserId', '==', userId)).valueChanges();
  }

  delete(id : string){
    return this.afs.collection<Application>(this.collectionName).doc(id).delete();
  }
}
