import { Component, OnInit } from '@angular/core';
import { iSong } from '../data/iSong';
import { ArtistServiceService } from '../data/artist-service.service';
import { PairsPipe } from '../utils/PairsPipe';
import { FormsModule } from '@angular/forms';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  items!: any[];
  id: string = '';
  myForm!: FormGroup;    
  submitted = false;   

 constructor(private artistService: ArtistServiceService,
  private formBuilder: FormBuilder
  ) { }

 iniciarFormulario(){
  this.myForm = this.formBuilder.group({                    
  });
}

  ngOnInit(): void {
    this.iniciarFormulario();
    console.log('ingresando a ngOnInit');
    this.artistService.Get6RandomSongs().then((response: any) => {
      console.log('response', response);
      this.items = response;      
    })
    .catch((error: any) => {
      console.error(': ', error);
    })     
   
  }

  onSubmit() {
    this.submitted = true;    
  }

}
