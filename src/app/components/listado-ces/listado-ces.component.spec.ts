import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCesComponent } from './listado-ces.component';

describe('ListadoCesComponent', () => {
  let component: ListadoCesComponent;
  let fixture: ComponentFixture<ListadoCesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoCesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
