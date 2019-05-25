import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTrainingComponentComponent } from './current-training-component.component';

describe('CurrentTrainingComponentComponent', () => {
  let component: CurrentTrainingComponentComponent;
  let fixture: ComponentFixture<CurrentTrainingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentTrainingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTrainingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
