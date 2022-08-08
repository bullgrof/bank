import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EnrollsService } from '../../services/enrolls.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-enroll-account',
  templateUrl: './enroll-account.page.html',
  styleUrls: ['./enroll-account.page.scss'],
})
export class EnrollAccountPage implements OnInit {

  idUser;
  enrollAccount: any ={
    alias:    "",           
    banking:  "",
    type:     "",
    account:  "",
    id:       "",
    currency: "",
    owner:    ""
}
response;

  constructor(
    private activatedRoute: ActivatedRoute,
    public enrollSerice : EnrollsService,
    private toastCtrl: ToastController,
    private router: Router,
  ) { }

  ngOnInit() {
    this.idUser = this.activatedRoute
      .snapshot
      .paramMap.get('id');
  }

  enroll(formenroll: NgForm) {
    this.enrollAccount.owner = this.idUser;
    console.log(this.enrollAccount);
    this.enrollSerice
        .enrollAccount(this.enrollAccount)
        .subscribe(res=>{
          this.response = res;
          console.log(this.response.ok);
          if (this.response.ok === true ) {
            this.presentToast('Inscripcion Realizada con exito');
            this.router.navigate(['/dashboard']);
          }else{
            this.presentToast('La cuenta que intenta inscribir ya se encuentra registrada con otro alias');
          }
    })
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


