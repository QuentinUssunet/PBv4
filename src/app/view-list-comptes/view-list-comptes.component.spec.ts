import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListComptesComponent } from './view-list-comptes.component';

describe('ViewListComptesComponent', () => {
  let component: ViewListComptesComponent;
  let fixture: ComponentFixture<ViewListComptesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewListComptesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewListComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
