import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashServiceService {

  details= new Subject <any>();
  constructor() {
   
    
   }

  OnClicked(title: String)
    {

   alert(title+' Data Passed Successfully');
    }
}
