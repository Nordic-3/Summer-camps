import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Camp } from '../models/Camp';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampService {

  collectionName = 'Camps';

  constructor(private afs : AngularFirestore) { }

  getAll() {
    return this.afs.collection<Camp>(this.collectionName, ref => ref.orderBy('nev')).valueChanges();
  }

  getByIds(ids: string[]) {
    if (ids.length === 0) {
      return of([]);
    } else {
      return this.afs.collection<Camp>(this.collectionName, ref => ref.where('id', 'in', ids)).valueChanges();
    }
  }
}
