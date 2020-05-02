import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  developer = {
    name: 'Hiskander',
    lastName: 'Aguillón',
    dateBirth: '26-11-1986',
    profession: 'Web Developer',
    // tslint:disable-next-line: max-line-length
    extract: 'Desarrollador con capacidad de crear soluciones en el menor tiempo posible. Apasionado por la arquitectura, el cloud computing y el desarrollo de software simple y de calidad.',
    skills: 'HTML, CSS, JS, Angular, Git'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
