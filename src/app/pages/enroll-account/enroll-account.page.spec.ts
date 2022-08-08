import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollAccountPage } from './enroll-account.page';

describe('EnrollAccountPage', () => {
  let component: EnrollAccountPage;
  let fixture: ComponentFixture<EnrollAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollAccountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
