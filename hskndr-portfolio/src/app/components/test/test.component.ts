import { Component, OnInit } from '@angular/core';
import { PersonClass } from './classes/person';
import { NinjaClass } from './classes/ninja';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  // Example
  person1: PersonClass = new PersonClass('Hiska');
  ninja1: NinjaClass = new NinjaClass('Liznel', 'Konoha');

  // Constructor
  constructor() { }
  ngOnInit() { }

  // Methods
  personRuns() {
    this.person1.personRun();
  }

  ninjaInfo() {
    console.log(this.ninja1.namePerson);
    this.ninja1.infoNinja();
  }
  // End Class
}
