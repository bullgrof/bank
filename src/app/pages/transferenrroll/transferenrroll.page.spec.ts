import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenrrollPage } from './transferenrroll.page';

describe('TransferenrrollPage', () => {
  let component: TransferenrrollPage;
  let fixture: ComponentFixture<TransferenrrollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferenrrollPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferenrrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
