import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* MODULES */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* COMPONENTS */
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent, AboutComponent } from './components';
import { FooterComponent } from './components/shared/footer/footer.component';
/* FIREBASE */
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { SendEmailComponent } from './auth/send-email/send-email.component';
import { AngularFirestore } from '@angular/fire/firestore';
/* SERVICES */
import { AuthService } from './auth/services/auth.service';
/* GUARDS */
import { CanEditGuard } from './auth/guards/can-edit.guard';
import { CanSuscriptorGuard } from './auth/guards/can-suscriptor.guard';
import { CanAdminGuard } from './auth/guards/can-admin.guard';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    SendEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    MaterialModule,
  ],
  providers: [
    AuthService,
    CanEditGuard,
    CanAdminGuard,
    CanSuscriptorGuard,
    AngularFirestore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
