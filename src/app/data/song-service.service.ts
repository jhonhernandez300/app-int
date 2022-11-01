import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { iSong } from '../data/iSong'

@Injectable({
  providedIn: 'root'
})
export class SongServiceService {

  constructor(private http: HttpClient) { }


}
