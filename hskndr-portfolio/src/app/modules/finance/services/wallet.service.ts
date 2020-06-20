import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WalletI } from '../shared/models/wallet.interface';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  // Observable, recibe los datos.
  wallets: Observable<WalletI[]>;
  // Referencia a un Documento Firebase
  walletDoc: AngularFirestoreDocument<WalletI>;

  constructor(
    private afs: AngularFirestore
  ) {
    console.log('Wallet Service');
    // Read All Wallets.
    this.wallets = this.afs.collection<WalletI>('wallets').snapshotChanges()
      .pipe(
        map(
          actions => actions.map(
            a => {
              const data = a.payload.doc.data() as WalletI;
              const id = a.payload.doc.id;
              return { id, ...data };
            }
          )
        )
      );
  }

  // Add New Wallet
  public addNewWallet(wallet: WalletI) {
    this.afs.collection<WalletI>('wallets').add(wallet);
    console.log('New Wallet in firebase');
  }

  // Read All Wallets
  public readAllWallets() {
    // from constructor
    return this.wallets;
  }

  // Update One Wallet
  public updateOneWallet(wallet: WalletI) {
    console.log('Update from service');

  }

  // Delete one Wallet
  public deleteOneWallet(wallet: WalletI) {
    console.log('Delete from service');
    // Referencias al Documento
    this.walletDoc = this.afs.doc(`wallets/${wallet.id}`);
    // Delete
    this.walletDoc.delete();
  }

}
