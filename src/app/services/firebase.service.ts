import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.listings = database.list('listings');
  }

  getListing(){
    return this.listings;
  }

  getListingDetails(listingId) {
    return this.database.object('listings/' + listingId);

  }

  //@TODO Storage ref
}

interface Listing{
  $key?:string;
  title?:string;
  type?:string;
  image?:string;
  city?:string;
  owner?:string;
  bedrooms?:string;
}
