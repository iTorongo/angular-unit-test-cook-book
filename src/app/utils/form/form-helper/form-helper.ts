import { FormGroup } from '@angular/forms';

export class FormHelper {
  static markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      // if (control.controls) {
      //   this.markFormGroupTouched(control);
      // }
    });
  }
}
