import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Método
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),

  });
  constructor(
    private authSvc: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  async onLogin() {
    //console.log('Form->', this.loginForm.value);
    //Extraer email y password del formulario

    const { email, password } = this.loginForm.value;

    try {
      const user = await this.authSvc.login(email, password);

      if(user && user.user.emailVerified  ){
        // Redirect to homepage
        this.router.navigate(['/home']);
      }else if(user){
        this.router.navigate(['/verification-email']);
      }else{
        this.router.navigate(['/register']);
      }
    } catch (error) {
      console.log(error);
    }
  }

}
