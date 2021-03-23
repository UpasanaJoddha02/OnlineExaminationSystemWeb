import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestquestionsComponent } from './testquestions.component';

describe('TestquestionsComponent', () => {
  let component: TestquestionsComponent;
  let fixture: ComponentFixture<TestquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestquestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
