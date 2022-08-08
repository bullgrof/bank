import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductcorrientePage } from './add-productcorriente.page';

describe('AddProductcorrientePage', () => {
  let component: AddProductcorrientePage;
  let fixture: ComponentFixture<AddProductcorrientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductcorrientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductcorrientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
