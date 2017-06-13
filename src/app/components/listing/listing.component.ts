import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  id: string;
  listing: any;
  imageUrl: any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //Get ID
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.listing = this.firebaseService.getListingDetails(this.id);
    console.log(this.listing);
  }

}
