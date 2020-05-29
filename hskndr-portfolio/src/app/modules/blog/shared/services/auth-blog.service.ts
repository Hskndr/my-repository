import { Injectable } from '@angular/core';
import { BlogUserI } from '../user.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthBlogService {
  public userData: Observable<firebase.User>;
  constructor(
    private afBlogAuth: AngularFireAuth
  ) {
    this.afBlogAuth.authState;
  }

  loginByEmail(user: BlogUserI) {
    const { email, password } = user;
    return this.afBlogAuth.auth.signInWithEmailAndPassword(email, password);

  }

  logout() {
    this.afBlogAuth.auth.signOut();
    console.log('logeeout');
  }
}
