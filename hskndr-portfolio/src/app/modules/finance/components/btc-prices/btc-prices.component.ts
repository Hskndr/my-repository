import { BtcPriceService } from './../../services/btc-price.service';
import { Component, OnInit } from '@angular/core';
import { BtcPriceI } from '../../shared/models/btc-price.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-btc-prices',
  templateUrl: './btc-prices.component.html',
  styleUrls: ['./btc-prices.component.css']
})
export class BtcPricesComponent implements OnInit {
  // Array recibed data
  public btcPrices: BtcPriceI[];

  constructor(
    // Inject the btcServices
    private BtcPriceSvc: BtcPriceService,
  ) {
  }

  ngOnInit(): void {
    // read all the btcPrice
    this.BtcPriceSvc.readAllBtcPrice().subscribe(
      // first function
      data => {
        this.btcPrices = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as BtcPriceI;
        });
      }
    );
  }

  // create BtcPrice
  fncreateBtcPrice(btcPrice: BtcPriceI) {
    this.BtcPriceSvc.createBtcPrice(btcPrice);
  }

  // update BtcPrice
  fnupdateBtcPrice(btcPrice: BtcPriceI) {
    this.BtcPriceSvc.updateBtcPrice(btcPrice);
  }

  // delete BtcPrice
  fndeleteBtcPrice(id: string) {
    this.BtcPriceSvc.deleteBtcPrice(id);
  }
}
