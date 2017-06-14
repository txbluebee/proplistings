import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.listings = database.list('/listings');
  }

  getListing(){
    return this.listings;
  }

  getListingDetails(listingId) {
    return this.database.object('/listings/' + listingId);
  }

  addListing(listing){
    this.listings.push(listing);
  }

  updateListing(id, listing) {
    return this.listings.update(id, listing);
  }

  deleteListing(id){
    return this.listings.remove(id);
  }

}
