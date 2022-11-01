import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArtistServiceService } from '../data/artist-service.service';
@Component({
  selector: 'app-the-search',
  templateUrl: './the-search.component.html',
  styleUrls: ['./the-search.component.css']
})
export class TheSearchComponent implements OnInit {
    
  items!: any[];
  message: string = '';
  
  constructor(private route: ActivatedRoute, private artistService: ArtistServiceService) { }

  ngOnInit(): void {    
    console.log("the-search component is on");    
    this.message = this.route.snapshot.params['message'];    
    this.artistService.GetSongsForAnArtist(this.message).then((response: any) => {
      console.log('response', response);
      this.items = response;
    })
    .catch((error: any) => {
      console.error(': ', error);
    }) 
  }

  

}
