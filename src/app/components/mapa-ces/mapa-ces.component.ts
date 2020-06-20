import { Component, OnInit, Input } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-mapa-ces',
  templateUrl: './mapa-ces.component.html',
  styleUrls: ['./mapa-ces.component.scss']
})

export class MapaCesComponent implements OnInit {
  public zoom = 10;
  display?: google.maps.LatLngLiteral;

  @Input()centro:any;
  constructor(public dataService: GetDataService) { }

  ngOnInit(): void {
  }

}
