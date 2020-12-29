import { CounterUtComponent } from './counter-ut.component';

describe('CounterUtComponent', () => {
  let component: CounterUtComponent;


  beforeEach(() => {
    component = new CounterUtComponent();
  });


  it('should increment counter value when increment() is called', () => {
    // Act
    component.increment();

    // Assert
    expect(component.counter).toBe(1);
  });

  it('should decrement counter value when decrement() is called', () => {
    // Act
    component.decrement();

    // Assert
    expect(component.counter).toBe(-1);
  });


  // Write unit test for RocketCreate


  it('should create a rocket with you own name', () => {
    let result = component.createOwnRocket('Torongo');

    expect(result).toContain('Torongo');
  });

});
