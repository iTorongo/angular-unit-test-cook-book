import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

import { ServiceUsageComponent } from './service-usage.component';

describe('ServiceUsageComponent', () => {
  let component: ServiceUsageComponent;
  // let fixture: ComponentFixture<ServiceUsageComponent>;
  let service: DataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(ServiceUsageComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();

    service = new DataService();
    component = new ServiceUsageComponent(service);
  });

  it('should call getUsers() on init component', () => {
    const spy = spyOn(service, 'getUsers').and.callFake(() => {
      return of([]);
    });

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  it('should set users data returned from server', () => {
    const users = [1, 2, 3];
    spyOn(service, 'getUsers').and.callFake(() => {
      return of(users);
    });

    component.ngOnInit();

    expect(component.users).toBe(users);
  });
});
