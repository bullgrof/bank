import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-generate-qr',
  templateUrl: './generate-qr.page.html',
  styleUrls: ['./generate-qr.page.scss'],
})
export class GenerateQrPage implements OnInit {
  
  accountNumber;
  accountArray;
  type;
  description;

  constructor(
    private activatedRoute: ActivatedRoute,
    public  userService:    UsersService,
  ) { }

  ngOnInit() {
    this.accountNumber = this.activatedRoute
                             .snapshot
                             .paramMap.get('id');
    this.getInfoAccount(this.accountNumber);    
  }

  getInfoAccount(accountNumber) {
    this.userService.getAccountUser(accountNumber)
      .subscribe(res => {
        this.accountArray = res.accountDetail;
        this.type = this.accountArray[0].type;
        this.description = this.accountArray[0].description;
      })
  }

}
