import { Component, OnInit } from '@angular/core';
import { ArtistServiceService } from '../data/artist-service.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {

  items!: any[];
    
   constructor(private artistService: ArtistServiceService) { }
   
  
   ngOnInit(): void {
    console.log('ingresando a ngOnInit');
    this.artistService.GetSongsForAnArtist("Metallica").then((response: any) => {
      console.log('response', response);
      this.items = response;
    })
    .catch((error: any) => {
      console.error(': ', error);
    })     
   
  }

}
