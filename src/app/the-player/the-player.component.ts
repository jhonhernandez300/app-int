import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SongServiceService } from '../data/song-service.service';
import { CommentServiceService } from '../data/comment-service.service';
import { iSong } from '../data/iSong';
import { iComment } from '../data/iComment';

@Component({
  selector: 'app-the-player',
  templateUrl: './the-player.component.html',
  styleUrls: ['./the-player.component.css']
})
export class ThePlayerComponent implements OnInit {
  myForm!: FormGroup;    
  submitted = false; 
  id: string = "";
  likes: number = 0;
  dislikes: number = 0;
  url: string = "";
  items!: any[];
  comments! : any[];
  

  song: iSong = {
    SongId: 0,
    Artist: '',
    SongName: '',
    SongLikes: 0,
    SongRegistryDate: new Date(),
    SongImageRoute: '',
    SongYoutubeUrl: '',
    ArtistId: 0
  };

  comment: iComment = {
    CommentId: 0,
    CommentDate: new Date(),
    CommentContent: '',
    SongId: 0
  };

   constructor(private formBuilder: FormBuilder, 
      private route: ActivatedRoute,
      private songService: SongServiceService,
      private commentService: CommentServiceService,
    ) { } 

   iniciarFormulario(){
    this.myForm = this.formBuilder.group({              
       comentario: ['']
    });
}

ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
  this.iniciarFormulario();
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  document.body.appendChild(tag); 

  console.log('Buscando el song: ', this.id);
    this.songService.GetSong(this.id).then((response: any) => {
      console.log('response', response);
      this.items = response;    
      console.log('Buscando los comentarios de la cancion: ', this.items[0].songId);
    this.commentService.GetComments(this.items[0].SongId).then((response: any) => {
      console.log('response', response);
      this.comments = response; 
      console.log(this.comments);     
    })
    .catch((error: any) => {
      console.error(': ', error);
    })   
    })
    .catch((error: any) => {
      console.error(': ', error);
    })     

    
  

}

get f(): { [key: string]: AbstractControl } {
  return this.myForm.controls;
}

onSubmit(): void {
  console.log('Ingresando a onSubmit');
  this.submitted = true;  

  console.log('Formulario commentario', this.myForm.value.comentario);
  this.comment.CommentContent = this.myForm.value.comentario;  
  this.comment.CommentDate = new Date();
  this.comment.SongId = this.items[0].SongId;
  console.log('Items SongId', this.items[0].SongId);

  console.log('Ingresando comentario: ', this.comment);
  this.commentService.SaveComment(this.comment).then((response: any) => {
    console.log('response SaveComment', response);
//    this.comment = response;        
  })
  .catch((error: any) => {
    console.error(': ', error);
  }) 
 
}

onLike(): void {
  this.submitted = false;
  //this.items[0].songLikes = this.items[0].songLikes + 1;
  //console.log('prueba like',this.items[0].songLikes);
  console.log('Ingresando otro like: ', this.items[0]);
  this.songService.UpdateLikes(this.items[0].songId).then((response: any) => {
    console.log('response like', response);
    this.items = response;        
  })
  .catch((error: any) => {
    console.error(': ', error);
  }) 
  
}

onDislike(): void {
  this.submitted = false;
  this.dislikes = this.dislikes + 1;
  this.myForm.reset();
}

onBoton(): void {
  console.log('Formulario commentario', this.myForm.value.comentario);
}

}
