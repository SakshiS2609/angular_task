import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DashServiceService } from '../dashboard/dash-service.service';


@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss']
})
export class Card1Component {

  detailsForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
    password: new FormControl('', [Validators.required]) //Minimum eight characters, at least one letter and one number:

  })




  title = "";
  constructor(private dashService: DashServiceService) {

  }
  onClick() {

    this.dashService.details.next(this.detailsForm)
  }

  detailsUser() {
    console.warn(this.detailsForm.value);
  }




}
