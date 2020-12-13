import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComponent } from './forms.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { of } from 'rxjs';

describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;

  let name: AbstractControl;
  let email: AbstractControl;
  let password: AbstractControl;
  let service: RegisterService;

  const mockFormValue = {
    name: 'john',
    email: 'john@doe.com',
    password: '123456',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [FormsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsComponent);
    component = fixture.componentInstance;

    name = component.form.get('name');
    email = component.form.get('email');
    password = component.form.get('password');

    service = TestBed.inject(RegisterService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contains input field name, email and password', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });

  it('name, email & password fileds should be required', () => {
    name.setValue('');
    email.setValue('');
    password.setValue('');

    expect(name.valid).toBeFalsy();
    expect(email.valid).toBeFalsy();
    expect(password.valid).toBeFalsy();
  });

  it('should have valid email address', () => {
    email.setValue('iAmInvalidEmail');
    expect(email.valid).toBeFalsy();
  });

  it('should contain atleast 6 characters in password', () => {
    password.setValue('123');
    expect(password.valid).toBeFalsy();
  });

  it('Should be valid if password is minimum 6 character', () => {
    password.setValue(mockFormValue.password);
    expect(password.valid).toBeTruthy();
  });

  it('should have invalid form if input invalid', () => {
    name.setValue('');
    email.setValue(mockFormValue.email);
    password.setValue(mockFormValue.password);
    component.onSubmit();

    expect(component.form.invalid).toBeTruthy();
  });

  it('should not call createUser() if form is invalid', () => {
    const spyComponent = spyOn(component, 'createUser');
    name.setValue('');
    email.setValue(mockFormValue.email);
    password.setValue(mockFormValue.password);
    component.onSubmit();

    expect(spyComponent).not.toHaveBeenCalled();
  });

  it('should call service createAccount() with valid form data', () => {
    const spyMockService = spyOn(service, 'createAccount').and.callFake(() => {
      return of('success');
    });

    name.setValue(mockFormValue.name);
    email.setValue(mockFormValue.email);
    password.setValue(mockFormValue.password);
    component.onSubmit();

    expect(spyMockService).toHaveBeenCalled();
  });
});
