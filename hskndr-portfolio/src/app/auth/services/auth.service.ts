import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User;

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  //Login Method
  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  //Register Method
  async register(email: string, password: string) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(
        email,
        password
      );
      this.sendVerificationEmail();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  //Logout Method
  async logout() {
    try {
      await this.afAuth.auth.signOut();
      //Se puede agregar los cambios en el localstorage.
    } catch (error) {
      console.log(error);
    }
  }
  //Get current user Method
  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
  //Send email Method
  async sendVerificationEmail(): Promise<void> {
    return (await this.afAuth.auth.currentUser).sendEmailVerification();
  }

  // ******
}

