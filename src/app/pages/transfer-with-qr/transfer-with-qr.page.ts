import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TransfersService } from 'src/app/services/transfers.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-transfer-with-qr',
  templateUrl: './transfer-with-qr.page.html',
  styleUrls: ['./transfer-with-qr.page.scss'],
})
export class TransferWithQrPage implements OnInit {

  transfer: any = {
    destiny: '',
    origin: '',
    iduser: '',
    value: '',
    type: '',
    description: ''
  }

  scaned;
  idUser;
  response;

  constructor(
    private qrScanner: QRScanner,
    public userService: UsersService,
    public transferService: TransfersService,
    private activatedRoute: ActivatedRoute,
    private toastCtrl: ToastController,
    private router: Router,
  ) { }

  ngOnInit() {
    this.idUser = this.activatedRoute
      .snapshot
      .paramMap.get('id');
  }

  scan() {
    this.qrScanner.prepare().then((status: QRScannerStatus) => {
      if (status.authorized) {
        this.qrScanner.show();
        document.getElementsByTagName("body")[0].style.opacity = "0";
        this.scaned = this.qrScanner.scan().subscribe((textFound) => {
          document.getElementsByTagName("body")[0].style.opacity = "1";
          this.transfer.destiny = textFound;
          this.qrScanner.hide();
          this.scaned.unsubscribe();
        }, (err) => {
          console.log(err);
        })
      } else if (status.denied) {
      }
    })
  }

  verifyAccount(account) {
    console.log('CHANGED', account);
    this.userService.getAccountUser(account)

      .subscribe(res => {
        account = res.accountDetail;
        this.transfer.type = account[0].type;
        this.transfer.origin = account[0].number;
      })
  }

  makeTransfer(formtransfer: NgForm) {
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

}
