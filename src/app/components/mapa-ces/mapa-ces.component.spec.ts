import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaCesComponent } from './mapa-ces.component';

describe('MapaCesComponent', () => {
  let component: MapaCesComponent;
  let fixture: ComponentFixture<MapaCesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaCesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaCesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
