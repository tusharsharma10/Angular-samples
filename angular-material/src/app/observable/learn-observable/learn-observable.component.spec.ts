import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnObservableComponent } from './learn-observable.component';

describe('LearnObservableComponent', () => {
  let component: LearnObservableComponent;
  let fixture: ComponentFixture<LearnObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
