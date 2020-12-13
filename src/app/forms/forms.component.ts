import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  /**
   * Init form
   */
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
  });

  get f(): any {
    return this.form.controls;
  }

  constructor(
    private service: RegisterService
  ) {}

  ngOnInit(): void {
  }

  /**
   * Submit form
   */
  onSubmit(): void {

    if (this.form.invalid) {
      return;
    }
    const formData = this.form.value;
    this.createUser(formData);
  }

  createUser(formData): void {
    this.service
        .createAccount(formData)
        .subscribe(res => {
          console.log(res);
        });
  }

}
