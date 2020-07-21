import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-t-form',
  templateUrl: './t-form.component.html',
  styleUrls: ['./t-form.component.css']
})
export class TFormComponent implements OnInit {
  // Array Powers
  powers = ['Kameha', 'Rasengar', 'Getsuga Tensou', 'Gear second'];

  // Model for Hero Class
  model = new Hero(1, 'Naruto', this.powers[1], 'Kyubi');

  // I dont know
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
  }
  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  // end class
}
