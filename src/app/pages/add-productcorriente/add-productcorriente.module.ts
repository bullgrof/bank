import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddProductcorrientePage } from './add-productcorriente.page';

const routes: Routes = [
  {
    path: '',
    component: AddProductcorrientePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddProductcorrientePage]
})
export class AddProductcorrientePageModule {}
