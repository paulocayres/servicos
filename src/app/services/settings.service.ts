import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  constructor() { }

  getlocale(){
    return 'pt-BR';
  }

}
