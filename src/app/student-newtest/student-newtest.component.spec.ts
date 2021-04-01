import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNewtestComponent } from './student-newtest.component';

describe('StudentNewtestComponent', () => {
  let component: StudentNewtestComponent;
  let fixture: ComponentFixture<StudentNewtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentNewtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentNewtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
