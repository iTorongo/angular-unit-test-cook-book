import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmitterComponent } from './event-emitter.component';

describe('EventEmitterComponent', () => {
  let component: EventEmitterComponent;
  let fixture: ComponentFixture<EventEmitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventEmitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise updateCounter event when increment() is called', () => {
    // Arrange
    let result;
    component.counterUpdated.subscribe(res => {
      result = res;
    });

    // Act
    component.increment();

    // Assert
    expect(result).toBe(1);
  });
});
