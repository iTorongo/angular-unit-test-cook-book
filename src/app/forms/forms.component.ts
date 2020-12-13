import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
  });

  get f(): any {
    return this.form.controls;
  }

  constructor() { }

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
    console.log(this.form.value)

  }

}
