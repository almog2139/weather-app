import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
   clear() {
    localStorage.clear();
}

 store(key, value) {
    localStorage[key] = JSON.stringify(value);
}

 load(key, defaultValue = null) {
    var value = localStorage[key];
    if (!value) return defaultValue
    else return JSON.parse(value);
}
}
