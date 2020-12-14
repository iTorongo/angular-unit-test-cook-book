import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBackgroundComponent } from './change-background.component';

describe('ChangeBackgroundComponent', () => {
  let component: ChangeBackgroundComponent;
  let fixture: ComponentFixture<ChangeBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggleBackground() should toggle #isDarkMode', () => {
    expect(component.isDarkMode).toBe(false, 'light  at first');

    component.toggleBackground();
    expect(component.isDarkMode).toBe(true, 'dark after click');

    component.toggleBackground();
    expect(component.isDarkMode).toBe(false, 'light after second click');
  });

  it('should contain "Dark" in #message if dark mode is enabled', () => {
    component.toggleBackground();

    expect(component.message).toContain('Dark');
  });
});
