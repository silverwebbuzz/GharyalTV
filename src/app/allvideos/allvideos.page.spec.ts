import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllvideosPage } from './allvideos.page';

describe('AllvideosPage', () => {
  let component: AllvideosPage;
  let fixture: ComponentFixture<AllvideosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllvideosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllvideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
