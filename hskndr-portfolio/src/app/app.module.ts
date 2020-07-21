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
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
/* SERVICES */
import { AuthService } from './auth/services/auth.service';
/* GUARDS */
import { CanEditGuard } from './auth/guards/can-edit.guard';
import { CanSuscriptorGuard } from './auth/guards/can-suscriptor.guard';
import { CanAdminGuard } from './auth/guards/can-admin.guard';
import { MaterialModule } from './material.module';
/* COMPONENTE EXTRAS */
import { TestComponent } from './components/test/test.component';
import { RFormComponent } from './components/test/r-form/r-form.component';
import { TFormComponent } from './components/test/t-form/t-form.component';
import { TransferBudgetComponent } from './components/transfer-budget/transfer-budget.component';
import { UploadImageComponent } from './components/test/upload-image/upload-image.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    SendEmailComponent,
    TestComponent,
    RFormComponent,
    TFormComponent,
    TransferBudgetComponent,
    UploadImageComponent,


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
    // Para el Blog
    AngularFirestoreModule,
    AngularFireStorageModule,
    //


  ],
  providers: [
    AuthService,
    CanEditGuard,
    CanAdminGuard,
    CanSuscriptorGuard,
    AngularFirestore,
    //Blog
    { provide: StorageBucket, useValue: 'gs://portfolio-login-392bb.appspot.com' }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
