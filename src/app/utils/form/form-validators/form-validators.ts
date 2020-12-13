import { Validators as NgValidators,  AbstractControl, ValidatorFn, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
export class Validators extends NgValidators {
  /**
   * Equal to validator
   */
  static equalTo(targetControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let hasError: boolean;

      if (control.value && targetControl.value && control.value !== targetControl.value) {
        hasError = true;
      }

      return hasError ? { equalTo: { value: control.value } } : null;
    };
  }

  /**
   * Blank space validator
   */
  static blankSpace(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let hasError: boolean;

      if (control.value) {
        hasError = (control.value.trim().length === 0);
        return hasError ? { blankSpace: { value: control.value } } : null;
      }

      return null;
    };
  }

  /**
   * Conditional required validator
   */
  static conditionalRequired(targetControl: AbstractControl, compareValue: boolean = true): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {

      let isConditionalRequired: boolean;

      if (
        (control.value === null ||
         control.value === ''   ||
         control.value === undefined) && targetControl.value === compareValue) {
          isConditionalRequired = true;
      }

      return isConditionalRequired ? { required: { value: control.value } } : null;
    };
  }

}
