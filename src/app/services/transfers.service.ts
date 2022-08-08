import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class TransfersService {

  constructor(
    private http: HttpClient,
  ) { }

  makeTransfer(data){
      return this.http.post(`${ URL }/transfer/create`, data);
  }
}
