import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseAPIComponent } from './base-api.component';

describe('BaseAPIComponent', () => {
  let component: BaseAPIComponent;
  let fixture: ComponentFixture<BaseAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
