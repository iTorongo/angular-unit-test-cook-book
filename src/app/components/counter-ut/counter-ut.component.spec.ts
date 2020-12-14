import { CounterUtComponent } from './counter-ut.component';

describe('CounterUtComponent', () => {
  let component: CounterUtComponent;


  beforeEach(() => {
    component = new CounterUtComponent();
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
