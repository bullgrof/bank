import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

const LNG_KEY = 'SELECTED_LENGUAGE';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {
  selected = '';

  constructor(private translate: TranslateService,
              private storage: Storage) { }

  setInicialAppLanguage(){
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);

    this.storage.get(LNG_KEY).then(val=>{
      if (val) {
        this.setLanguage(val),
        this.selected = val;
      }
    })
  }

  getLanguages(){
    return [
      {text: 'English', value: 'en', img: 'assets/flags/england.png'},
      {text: 'Spanish', value: 'es', img: 'assets/flags/spain.png'}
    ]
  }

  setLanguage(lng){
    this.translate.use('en');
    this.selected = lng;
    this.storage.set(LNG_KEY, lng);
  }
}
