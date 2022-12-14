import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { iSong } from '../data/iSong'

@Injectable({
  providedIn: 'root'
})
export class ArtistServiceService {

  constructor(private http: HttpClient) { }

  GetSongsForAnArtist(artist: string): Promise<any> {
    return this.http.get<any>('https://localhost:7110/api/artist/GetSongsForAnArtist' + "/" + artist)
    .toPromise();
  }

  Get6RandomSongs(): Promise<any> {
    return this.http.get<any>('https://localhost:7110/api/artist/Get6RandomSongs')
    .toPromise();
  }

 

}
