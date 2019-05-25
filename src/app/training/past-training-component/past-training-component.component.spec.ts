import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTrainingComponentComponent } from './past-training-component.component';

describe('PastTrainingComponentComponent', () => {
  let component: PastTrainingComponentComponent;
  let fixture: ComponentFixture<PastTrainingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastTrainingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastTrainingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
