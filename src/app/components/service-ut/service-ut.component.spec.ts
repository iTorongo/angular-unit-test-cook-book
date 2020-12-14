import { of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { ServiceUtComponent } from './service-ut.component';

describe('ServiceUtComponent', () => {
  let component: ServiceUtComponent;
  let service: DataService;

  beforeEach(() => {
    service = new DataService();
    component = new ServiceUtComponent(service);
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
