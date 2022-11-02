import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iComment } from '../data/iComment'

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  constructor(private http: HttpClient) { }

  SaveComment(comment: iComment): Promise<any> {
    console.log('Antes de consumir el servicio SaveComment', comment);
    return this.http.post<any>('https://localhost:7110/api/comment/SaveComment', comment)
    .toPromise();
  }

  GetComments(songId:string ): Promise<any> {
    console.log(songId);
    return this.http.get<any>('https://localhost:7110/api/comment/GetComments' + "/" + 1)
    .toPromise();
  }

}
