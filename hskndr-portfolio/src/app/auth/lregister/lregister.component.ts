import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lregister',
  templateUrl: './lregister.component.html',
  styleUrls: ['./lregister.component.css']
})
export class LregisterComponent implements OnInit {
  //Método
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),

  });

  constructor(
    private authSvc: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onRegister() {
    // console.log('Form->', this.registerForm.value);

    //Extraer email y password del formulario
    const { email, password } = this.registerForm.value;
    try {
      const user = this.authSvc.register(email, password);
      if (user) {
        //redirecto login
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
