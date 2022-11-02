import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { iSong } from '../data/iSong'

@Injectable({
  providedIn: 'root'
})
export class SongServiceService {

  constructor(private http: HttpClient) { }

  GetSong(song: string): Promise<any> {
    console.log(song);
    return this.http.get<any>('https://localhost:7110/api/song/GetSong' + "/" + song)
    .toPromise();
  }

  UpdateLikes(song: any): Promise<any> {
    console.log("servicio SaveLikeDislike", song);
    return this.http.post<any>('https://localhost:7110/api/song/UpdateLikes', song)
    .toPromise();
  }
}
