import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent /* implements OnInit */ {
  hskndr: string = "<HSKNDR>"

  //public isLogged = false;
  //public user: any;

  //Devuelve el objeto user.

  public user$: Observable<User> = this.authSvc.afAuth.user;

  constructor(
    private authSvc: AuthService,
    private router: Router

  ) { }

/*   async ngOnInit() {



  console.log('Navbar');
    this.user = await this.authSvc.getCurrentUser();
    if (this.user) {
      this.isLogged = true;
      console.log('user-->', this.user);
    }
  }
 */
  async onLogout() {
    try {
      await this.authSvc.logout();
      this.router.navigate(['/login']);

    } catch (error) {
      console.log(error);
    }
  }

}