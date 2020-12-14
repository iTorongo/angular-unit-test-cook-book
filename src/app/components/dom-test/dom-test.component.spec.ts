import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DomTestComponent } from './dom-test.component';

describe('DomTestComponent', () => {
  let component: DomTestComponent;
  let fixture: ComponentFixture<DomTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove alert from the DOM if visibility is set false', () => {
    component.visibility = false;

    fixture.detectChanges();
    const noticeDebugElement = fixture.debugElement.query(By.css('.notice'));

    expect(noticeDebugElement).toBeNull();
  });

  it('should display alert in the DOM if visibility is set true by toggleAlert()', () => {
    component.toggleAlert();
    fixture.detectChanges();

    const noticeDebugElement = fixture.debugElement.query(By.css('.notice'));

    expect(noticeDebugElement).not.toBeNull();
  });

  it('should change to success alert if changeAlertType() is clicked once', () => {
    component.changeAlertType();
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.type'));

    expect(de.classes['alert-success']).toBeTruthy();
  });
});
