import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ServerService } from '../../services/server.service';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let service: ServerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      imports: [
        HttpClientTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges(); // This will trigger ngOnInit() at first
    service = TestBed.inject(ServerService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get users from server', () => {
    spyOn(service, 'getUserList').and.returnValue(of([1, 2, 3]));

    fixture.detectChanges();

    expect(component.users.length).toBe(3);
  });
});
