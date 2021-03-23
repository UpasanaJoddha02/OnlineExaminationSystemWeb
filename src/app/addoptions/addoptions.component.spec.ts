import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoptionsComponent } from './addoptions.component';

describe('AddoptionsComponent', () => {
  let component: AddoptionsComponent;
  let fixture: ComponentFixture<AddoptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddoptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
