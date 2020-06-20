import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentPositionService {

  constructor() { }
  
  getCurrentLocation() {
    return new Promise ( resolve => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const posicionActual = {
            latitud: position.coords.latitude,
            longitud: position.coords.longitude
          };
          resolve( posicionActual );
        });
      }
    });
  }
}
