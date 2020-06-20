import { Component, OnInit, ViewChild } from '@angular/core';
import {MapInfoWindow, MapMarker} from '@angular/google-maps';
import { GetDataService } from '../../services/get-data.service';
import { CurrentPositionService } from '../../services/current-position.service';



@Component({
  selector: 'app-listado-ces',
  templateUrl: './listado-ces.component.html',
  styleUrls: ['./listado-ces.component.scss'],
  providers:[GetDataService]
})
export class ListadoCesComponent implements OnInit {
  @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;
  valores:any;
  centro:any;
  zoom = 12;
  display?: google.maps.LatLngLiteral;
  markerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  constructor(private dataService: GetDataService, private currentPosition : CurrentPositionService) {}

  ngOnInit(): void {
    this.getPosition();
    this.dataService.getData()
    .subscribe(
      res => { 
          this.valores=this.selectValues(res)
          //this.centro=this.calcCentro(this.valores)
      },  
      err => {
        console.log(err);
      }    
    );
  }
  selectValues(res: Array <any>) {
    let dato: string;
    let datos=[];
    
    res.forEach(function (value: any) {
      
      dato='{"id":'+value.id+',"lat":'
      +value['cn-map'].lat+',"long":'
      +value['cn-map'].lng+',"title":"'+value.title.rendered+'"}';
      datos.push(JSON.parse(dato));
      
    }); 
    return datos
  }
  onCheckboxChange(e: { target: { checked: any; }; },ce:any) {
    let latLng={lat:ce.lat,lng:ce.long}
    
    if (e.target.checked) {
      this.marcar(latLng)
    } else {
      this.desmarcar(latLng)
    }
    
  }
  marcar(latLng: any){
    this.markerPositions.push(latLng);
  }
  desmarcar(latLng: any){
    
    this.markerPositions.forEach(function(valor, indice, array) {

      if((latLng.lat==valor.lat)&&(latLng.lng==valor.lng)){
        array.splice(indice,1);
        return false
      }
      
  });
  }

  getPosition(){
    this.currentPosition.getCurrentLocation()
    .then( resp => {
      this.centro={lat:resp['latitud'],lng:resp['longitud']}

    })
  }
}
