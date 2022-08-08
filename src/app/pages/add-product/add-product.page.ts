import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  product : any = {
    iduser: '',
    type: "AHORROS",
    description: ""
  }
  idUser;
  response;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService :ProductsService,
    private toastCtrl: ToastController,
    private router: Router,
  ) { }

  ngOnInit() {
    this.idUser = this.activatedRoute
      .snapshot
      .paramMap.get('id');
    this.product.iduser = this.idUser;
  }

  createProduct(formenroll: NgForm) {
    this.productService.openProduct(this.product).subscribe(res=>{
      this.response = res;
      if (this.response.ok === true) {
        this.presentToast('La cuenta se ha creado con exito');
        this.router.navigate(['/dashboard']);
      }else{
        this.presentToast('No se ha podido crear la cuenta');
      }
    })
    console.log(this.product);
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2500,
      position: 'middle'
    });
    toast.present();
  }
}
