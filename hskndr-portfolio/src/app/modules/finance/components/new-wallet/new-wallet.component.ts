import { WalletI } from './../../shared/models/wallet.interface';
import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../services/wallet.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-wallet',
  templateUrl: './new-wallet.component.html',
  styleUrls: ['./new-wallet.component.css']
})
export class NewWalletComponent implements OnInit {
  // Objeto para el nuevo Wallet
  newWalletObj: WalletI = {
    date: 0,
    hour: 0,
    criptoName: '',
    balanceCripto: '',
  };

  constructor(
    private wSvc: WalletService
  ) { }

  ngOnInit(): void {
  }

  // Funcion desde el componente
  onAddNewWallet(newWalletForm: NgForm) {
    console.log('Adding Wallet');
    // Create Date
    const createAt = Date.now();
    this.newWalletObj.date = createAt;
    this.newWalletObj.hour = createAt;

    // TODO: Agregar fechas automaticamente
    // Add Wallet
    this.wSvc.addNewWallet(this.newWalletObj);
    console.log('object Save', this.newWalletObj);
  }

}
