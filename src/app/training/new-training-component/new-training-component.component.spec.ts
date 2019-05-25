import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrainingComponentComponent } from './new-training-component.component';

describe('NewTrainingComponentComponent', () => {
  let component: NewTrainingComponentComponent;
  let fixture: ComponentFixture<NewTrainingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTrainingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrainingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
