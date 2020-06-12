import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BtcPriceI } from '../shared/models/btc-price.interface';

@Injectable({
  providedIn: 'root'
})
export class BtcPriceService {

  constructor(
    private afs: AngularFirestore,
  ) {
    console.log('BTC-Price Services Works');
  }

  // C.R.U.D.

  // Create
  public createBtcPrice(btcPrice: BtcPriceI) {
    return this.afs.collection('btcPrices').add(btcPrice);
  }

  // Get a price
  public readOneBtcPrice(priceBtcId: string) {
    return this.afs.collection<BtcPriceI>('btcPrices').doc(priceBtcId).snapshotChanges();
  }

  // Read all the prices
  public readAllBtcPrice() {
    return this.afs.collection<BtcPriceI>('btcPrices').snapshotChanges();
  }

  // Update the price
  public updateBtcPrice(btcPrice: BtcPriceI) {
    delete btcPrice.id;
    return this.afs.doc('btcPrices/' + btcPrice.id).update(btcPrice);
  }

  // Delete a price
  public deleteBtcPrice(priceBtcId: string) {
     this.afs.doc('btcPrices/' + priceBtcId).delete();
  }
}
