import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { UserDetailsComponent } from './user-details.component';

const mockUser = {
  id: 1,
  name: 'John'
};

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render the passed @Input value', () => {
    const nameDebugElement = fixture.debugElement.query(By.css('.card-title'));

    fixture.detectChanges();

    expect(nameDebugElement).toBeNull();
  });


  it('should raise selected event when clicked follow', () => {
    let selectedUser: any;

    component.user = mockUser;

    component.userFollowed.subscribe(user => {
      selectedUser = user;
    });

    component.follow();

    expect(selectedUser).toBe(component.user);
  });

  // it('should raise selected event when clicked follow', () => {
  //   let selectedUser: any;

  //   component.user = mockUser;
  //   fixture.detectChanges();

  //   const followBtnDE = fixture.debugElement.query(By.css('.btn-follow'));
  //   const el = followBtnDE.nativeElement;

  //   component.userFollowed.subscribe(user => {
  //     selectedUser = user;
  //   });

  //   followBtnDE.triggerEventHandler('click', null);

  //   expect(selectedUser).toBe(component.user);
  // });
});
