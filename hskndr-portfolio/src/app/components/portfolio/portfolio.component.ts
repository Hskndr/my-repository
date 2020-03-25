import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Project 1', cols: 1, rows: 1, description: 'La Femme' },
          { title: 'Project 2', cols: 1, rows: 1, description: 'Delivery Despegar' },
          { title: 'Project 3', cols: 1, rows: 1, description: 'Stopdoubt' },
          { title: 'Project 4', cols: 1, rows: 1, description: 'Finanzas' },
          { title: 'Project 5', cols: 1, rows: 1, description: 'Portfolio' }
        ];
      }

      return [
        { title: 'Project 1', cols: 1, rows: 1, description: 'La Femme' },
        { title: 'Project 2', cols: 1, rows: 1, description: 'Delivery Despegar' },
        { title: 'Project 3', cols: 1, rows: 1, description: 'Stopdoubt' },
        { title: 'Project 4', cols: 1, rows: 1, description: 'Finanzas' },
        { title: 'Project 5', cols: 1, rows: 1, description: 'Portfolio' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
