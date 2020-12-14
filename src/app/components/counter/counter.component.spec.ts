import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment counter value when increment() is called', () => {
    // Arrange

    // Act
    component.increment();

    // Assert
    expect(component.counter).toBe(1);
  });

  it('should decrement counter value when decrement() is called', () => {
    // Arrange

    // Act
    component.decrement();

    // Assert
    expect(component.counter).toBe(-1);
  });

});
