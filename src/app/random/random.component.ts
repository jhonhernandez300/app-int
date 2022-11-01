import { Component, OnInit } from '@angular/core';
import { iSong } from '../data/iSong';
import { ArtistServiceService } from '../data/artist-service.service';
import { PairsPipe } from '../utils/PairsPipe';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  items!: any[];

 constructor(private artistService: ArtistServiceService) { }

  ngOnInit(): void {
    console.log('ingresando a ngOnInit');
    this.artistService.Get6RandomSongs().then((response: any) => {
      console.log('response', response);
      this.items = response;
    })
    .catch((error: any) => {
      console.error(': ', error);
    })     
   
  }

}
