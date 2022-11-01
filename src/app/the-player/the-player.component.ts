import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-the-player',
  templateUrl: './the-player.component.html',
  styleUrls: ['./the-player.component.css']
})
export class ThePlayerComponent implements OnInit {
  myForm!: FormGroup;    
  submitted = false; 
  userId: number = 0;
  likes: number = 0;
  dislikes: number = 0;

   constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) { } 

   iniciarFormulario(){
    this.myForm = this.formBuilder.group({              
       comentario: ['']
    });
}

ngOnInit(): void {
  this.userId = this.route.snapshot.params['id'];
  this.iniciarFormulario();

}

get f(): { [key: string]: AbstractControl } {
  return this.myForm.controls;
}

onSubmit(): void {
  this.submitted = true;
  if (this.myForm.invalid) {
    return;
  }
  
}

onLike(): void {
  this.submitted = false;
  this.likes = this.likes + 1;
  this.myForm.reset();
}

onDislike(): void {
  this.submitted = false;
  this.dislikes = this.dislikes + 1;
  this.myForm.reset();
}

}
