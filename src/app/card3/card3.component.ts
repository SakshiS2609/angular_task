import { Component } from '@angular/core';
import samples from '../dashboard/samples.json';

interface SAMPLES {
  id: Number;
  name: String;
  username: String;
  email: String;
}
@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.scss']
})
export class Card3Component {


  Samples: SAMPLES[]= samples;
  constructor()
  {
    console.log(this.Samples);
  }
}
