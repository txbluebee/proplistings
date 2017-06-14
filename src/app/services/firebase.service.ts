import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;
  folder: any;


  constructor(private database: AngularFireDatabase) {
    this.listings = database.list('listings');
    this.folder = 'listingimages';
  }

  getListing(){
    return this.listings;
  }

  getListingDetails(listingId) {
    return this.database.object('listings/' + listingId);
  }

  addListing(listing){
    this.listings.push(listing);
  }

  updateListing(id, listing) {
    return this.listings.update(id, listing);
  }

}

// interface Listing{
//   $key?:string;
//   title?:string;
//   type?:string;
//   image?:string;
//   city?:string;
//   owner?:string;
//   bedrooms?:string;
// }
