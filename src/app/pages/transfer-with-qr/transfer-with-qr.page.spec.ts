import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferWithQrPage } from './transfer-with-qr.page';

describe('TransferWithQrPage', () => {
  let component: TransferWithQrPage;
  let fixture: ComponentFixture<TransferWithQrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferWithQrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferWithQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
