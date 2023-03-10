import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpService) { }

  notes(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
   return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/user/gN4RZnHFYjr9WfW7ryMJAMMlJI65DXIDdwbqF6TFzlgiyv3eYVgHHZiLKZ73nWQo/notes',data,false,header)
  }

  getNotes(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
   return this.http.getservice('http://fundoonotes.incubation.bridgelabz.com/api/user/gN4RZnHFYjr9WfW7ryMJAMMlJI65DXIDdwbqF6TFzlgiyv3eYVgHHZiLKZ73nWQo/notes',false,header)
  }
}

