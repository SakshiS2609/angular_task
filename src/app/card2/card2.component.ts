import { Component } from '@angular/core';
import { DashServiceService } from '../dashboard/dash-service.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss']
})
export class Card2Component {

  user=""
  password=""
  constructor(private dashService: DashServiceService) {

    this.dashService.details.subscribe(details=>{
      this.user=details.value['user']
      this.password=details.value['password']
    })
  }

}
