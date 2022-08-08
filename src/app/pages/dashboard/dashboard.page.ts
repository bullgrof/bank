import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UsersService } from '../../services/users.service';
import { 
  NavController, 
  } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})


export class DashboardPage implements OnInit {
  
  username;
  swAccounts=false;
  data;
  accounts:[];
  idU;
  balance=0;
  
  constructor(
      public storage: Storage,
      public userService: UsersService,
      public navCtrl: NavController,) { }
  
  ngOnInit() {
    this.storage.get('username').then(res => {
      this.username=res;

      this.userService.getUserInfo(this.username)
            .subscribe(res => {
              this.data =  res.userDB;
              this.getUserAccounts(this.data._id );
              this.idU = this.data._id;
             })

    })
    console.log(this.username);
  }

  getUserAccounts(idUser){
    this.userService.getAccountsUSer(idUser).subscribe( res => {
      console.log(res);
      this.accounts = res.accountDetail;
      this.getBalance(this.accounts);
    })
  }

  getBalance(accounts){
      accounts.map(elemn =>{
        console.log(elemn.balance);
        this.balance = this.balance + elemn.balance;
      })
  }

  close(){
    this.navCtrl.navigateRoot('/home');
  }

}
