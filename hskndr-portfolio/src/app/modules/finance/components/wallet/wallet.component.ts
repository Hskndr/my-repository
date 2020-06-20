import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../services/wallet.service';
import { Observable } from 'rxjs';
import { WalletI } from '../../shared/models/wallet.interface';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  // Wallet array
  public walletsComp: WalletI[];
  // Edit property
  editWalletState = false;
  walletToEdit: WalletI;

  constructor(
    private wSvc: WalletService,
  ) { }

  ngOnInit(): void {
    // READ all wallets
    this.wSvc.readAllWallets().subscribe(
      walletsCompSubscrbe => this.walletsComp = walletsCompSubscrbe
      // .subscribe ends
    );
  }

  procesaPropagar(mensaje) {
    console.log('Desde edit-wallet ->', mensaje);
  }

  // UPDATE Wallet
  onUpdateWallet(wallet: WalletI) {
    // Update in firebase
    this.wSvc.updateOneWallet(wallet);
  }

  // Funtion to edit wallet
  fnEditWallet($event: any, wallet: WalletI) {
    this.editWalletState = true;
    console.log('editWalletState->', this.editWalletState);
    console.log('event->', $event);
    this.walletToEdit = wallet;
    console.log('WalletToEdit->', this.walletToEdit);
  }

  // DELETE Wallet
  onDeleteWallet(wallet: WalletI) {
    // Delete from firebase
    console.log('Delete', wallet);
    this.wSvc.deleteOneWallet(wallet);
    console.log('After Firebase');
  }
}
