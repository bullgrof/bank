import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { EnrollsService } from '../../services/enrolls.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TransfersService } from 'src/app/services/transfers.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-transferenrroll',
  templateUrl: './transferenrroll.page.html',
  styleUrls: ['./transferenrroll.page.scss'],
})
export class TransferenrrollPage implements OnInit {


  transfer :any = {
    origin:         '',
    iduser:         '',
    destiny:        '',
    value:          '',
    type:           '',
    description:    ''
}
  idUser;
  response;
  myaccounts;
  maccounts

  constructor(
    private qrScanner: QRScanner,
    public userService: UsersService,
    public enrollService : EnrollsService,
    public transferService: TransfersService,
    private activatedRoute: ActivatedRoute,
    private toastCtrl: ToastController,
    private router: Router,
  ) { }

  ngOnInit() {
    this.idUser = this.activatedRoute
        .snapshot
        .paramMap.get('id');
    this.getAccountsEnroll();
    this.getMyAccounts(this.idUser);

  }

  verifyAccount(account) {
    console.log('CHANGED', account);
    this.userService.getAccountUserbyId(account)
      .subscribe(res => {
        console.log('333333333',res);
        account = res.accountDetail;
       
        this.transfer.origin = account[0].number;
      })
  }

  makeTransfer(formtransfer: NgForm) {
    this.verifyAccount(this.idUser);
    this.transfer.destiny = parseInt(this.transfer.destiny);
    this.transfer.origin = parseInt(this.transfer.origin);
    this.transfer.iduser = this.idUser;
    console.log(this.transfer);
    this.transferService.makeTransfer(this.transfer)
      .subscribe(res => {
        this.response = res;
        if (this.response.ok === true) {
          this.presentToast('Transferencia Realizada con exito');
          this.router.navigate(['/dashboard']);
        }
      })
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  getAccountsEnroll(){
    this.enrollService.getAccountsEnrollos(this.idUser)
      .subscribe(res=>{
       this.response = res.accounts;
       console.log(this.response);
      })
  }

  getMyAccounts(myId) {
    this.userService.getAccountUserbyId(myId)
      .subscribe(res => {
        console.log('4444444',res);
        this.maccounts = res.accountDetail;
      })
  }

}
