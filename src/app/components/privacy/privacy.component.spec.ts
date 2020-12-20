import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyComponent } from './privacy.component';

describe('PrivacyComponent', () => {
  let component: PrivacyComponent;
  let fixture: ComponentFixture<PrivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('togglePrivacy() should toggle #isPublic value', () => {
    expect(component.isPublic).toBe(true);

    component.togglePrivacy();
    expect(component.isPublic).toBe(false, 'Private after click'); // Expectation Fail Output message

    component.togglePrivacy();
    expect(component.isPublic).toBe(true, 'Public again after second click');
  });

  it('should contain "Private" in #message if private mode is enabled', () => {
    component.togglePrivacy();

    expect(component.message).toContain('Private');
  });
});
