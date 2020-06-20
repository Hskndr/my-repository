import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WalletI } from '../../shared/models/wallet.interface';
import { WalletService } from '../../services/wallet.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-edit-wallet',
  templateUrl: './edit-wallet.component.html',
  styleUrls: ['./edit-wallet.component.css']
})
export class EditWalletComponent implements OnInit {
  // Wallet array
  public walletsComp: WalletI[];
  // Edit property
  editWalletState = true;
  walletToEdit: WalletI;

  mensaje: string;

  @Input() wallet: WalletI;
  @Output()
  propagar = new EventEmitter<string>();

  constructor(
    private wSvc: WalletService,
  ) { }

  ngOnInit(): void {
  }

  onPropagar() {
    this.propagar.emit(this.mensaje);
  }

  onUpdateWallet($event: any, wallet: WalletI) {
    console.log(wallet);
    console.log($event);
    // Update in firebase
    this.wSvc.updateOneWallet(wallet);
    this.editWalletState = false;

  }

}
