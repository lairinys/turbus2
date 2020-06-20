import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  public centro:any;
  public zoom = 15;
  display?: google.maps.LatLngLiteral;

  constructor(private http:HttpClient) { }

  getData():Observable<any> {
   
    //let headers = new HttpHeaders();
    //headers.append('Content-Type', 'application/json');
    
    let url="https://cors-anywhere.herokuapp.com/http://suzukimotos.cl/wp-json/wp/v2/concesionarios"

    return this.http.get(url)    
  
  }
}
