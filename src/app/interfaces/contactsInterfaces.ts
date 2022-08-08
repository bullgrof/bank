export interface RespContacts {
  state: number;
  _id: string;
  siduser: string;
  sidcontact: string;
  __v: number;
}


export interface contactsCard {
  ok: boolean;
  contacts: [];
  conteo: number;
  message: string;
  badge: number;
  avatar: string;
  sidcontact: string;
  idDef2: string;
 
}

export interface badges{
  ok: boolean;
  counter: number;
}


export interface idContacs{
  ok: boolean;
  idDef: string;
  idDef2: string;  
}


export interface UserBySekretId{    
  ok?: boolean,
  user?: []
  total: number
}

export interface getAlreadyHave{
ok: boolean,
total: number
}

export interface getUsernaContact{
    "ok": boolean,
    "alias": string
}
