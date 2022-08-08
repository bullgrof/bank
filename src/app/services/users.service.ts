import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Login, ResponseUser, AccountInfo } from '../interfaces/userinterface';
import { Storage } from '@ionic/storage'
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  username: String = null; 
 
  constructor(private http: HttpClient,
    private storage: Storage,
    private router: Router,
    private toastCtrl: ToastController,) { }


  login(username: string, password: string) {
    const data = { username, password };
    return new Promise(resolve => {
      this.http.post<Login>(`${URL}/user/login`, data)
        .subscribe(resp => {
         
          if (resp['ok']) {
            //this.saveToken(username);
            resolve(true);
          } else {
            this.username = null;
            this.storage.clear();
            resolve(false);
          }

        });
    });
  }

  getUserInfo(username: string ){
    return this.http.get<ResponseUser>(`${URL}/user/info?username=${username}`);
  }

  getAccountsUSer(idUser: string ){
    return this.http.get<AccountInfo>(`${URL}/account/getMyBalance?idUser=${idUser}`);
  }

  

  getAccountUser(number: string ){
    return this.http.get<AccountInfo>(`${URL}/account/getMyBalanceByAccount?number=${number}`);
  }

  getAccountUserbyId(number: string ){
    return this.http.get<AccountInfo>(`${URL}/account/getMyBalanceByidUser?id=${number}`);
  }



  
}
