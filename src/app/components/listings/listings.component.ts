import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  listings: FirebaseListObservable<any[]>;

  
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.listings = this.firebaseService.getListing();
  }
}
