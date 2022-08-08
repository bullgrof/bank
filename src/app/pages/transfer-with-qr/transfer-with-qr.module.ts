import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TransferWithQrPage } from './transfer-with-qr.page';

const routes: Routes = [
  {
    path: '',
    component: TransferWithQrPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TransferWithQrPage]
})
export class TransferWithQrPageModule {}
