import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { RoutesComponent } from './routes.component';

describe('RoutesComponent', () => {
  let component: RoutesComponent;
  let fixture: ComponentFixture<RoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesComponent ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a router outlet', () => {
    const de = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(de).not.toBe(null);
  });

  it('should have a router link to about page', () => {
    const dEls = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = dEls.findIndex((de => de.properties['href'] === '/about'));

    expect(index).toBeGreaterThan(-1);
  });

  it('should navigate to contact page when navigateTo() clicked', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.navigateTo();

    expect(spy).toHaveBeenCalledWith(['routes/contact']);
  });
});
