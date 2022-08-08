import { Token } from '@angular/compiler/src/ml_parser/lexer';


export interface Login {
    ok: boolean,
    msj: string,
  }

export interface ResponseUser {
  ok: boolean;
  userDB: [];
}

export interface UserDB {
  state:    boolean;
  avatar:   string;
  _id:      string;
  username: string;
  name:     string;
  document: string;
  documenttype: string;
  type:     string;
}

export interface AccountInfo {
  accountDetail: []
}

export interface accountDetail{
  balance:      number;
  _id:          string;
  number:       number;
  iduser:       string;
  type:         string;
  description:  string;
  create_at:    string;
}

export interface accountsSelect{
  accounts: []
}

export interface accounts {
  _id: string;
  alias: string;
  banking: string;
  type: string;
  account: number;
  id: number;
  currency: string;
  idowner: string;
  
}