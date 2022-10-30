import { Component, OnInit } from '@angular/core';
import { iSong } from '../data/iSong';
import { SongServiceService } from '../data/song-service.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  items!: any[];

 constructor(private songService: SongServiceService) { }

  ngOnInit(): void {
    console.log('ingresando a ngOnInit');
    this.songService.Get6RandomSongs().then((response: any) => {
      console.log('response', response);
      this.items = response;
    })
    .catch((error: any) => {
      console.error(': ', error);
    })     
   
  }

}
