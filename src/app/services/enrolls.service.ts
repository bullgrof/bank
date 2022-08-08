import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, ResponseUser, AccountInfo, accountsSelect } from '../interfaces/userinterface';
import { environment } from 'src/environments/environment';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class EnrollsService {

  constructor( private http: HttpClient,) { }

  enrollAccount(data){
    return this.http.post(`${ URL }/inscriptions/enroll`, data);
  }


  getAccountsEnrollos(id){
    return this.http.get<accountsSelect>(`${ URL }/inscriptions/getMyinscriptions?id=${id}`);
  }
}
