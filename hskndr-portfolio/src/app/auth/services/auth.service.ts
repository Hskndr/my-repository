import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { User } from 'firebase';
import { AngularFireAuth }  from '@angular/fire/auth';
import { first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User;

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  //METODOS DE REGISTRO
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

  async register(email: string, password: string) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(
        email,
        password
      );
      return result;

    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    try {
      await this.afAuth.auth.signOut();
      //Se puede agregar los cambios en el localstorage.

    } catch (error) {
      console.log(error);

    }
  }


  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
