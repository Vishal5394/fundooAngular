import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/noteservices/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  
  title:any;
  desc:any;
  show=false;
  constructor(private note:NoteService){ }
  res:any;

ngOnInit(): void{
  this.res="result";
}
isShow(){
  this.show=true;
}

close():void{
  this.show= false;
  console.log(this.title, this.desc);
  let data={
   title:this.title,
   description:this.desc
  }
  this.note.notes(data).subscribe((result:any)=>{
    console.log(result);
  })
}
}
