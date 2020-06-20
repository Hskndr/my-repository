import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceComponent } from './finance.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewWalletComponent } from './components/new-wallet/new-wallet.component';
import { EditWalletComponent } from './components/edit-wallet/edit-wallet.component';


@NgModule({
  declarations: [
    FinanceComponent,
    WalletComponent,
    NewWalletComponent,
    EditWalletComponent,
  ],

  imports: [
    CommonModule,
    FinanceRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FinanceModule { }
