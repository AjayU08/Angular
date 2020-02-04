import { AbstractControl, ValidationErrors } from "@angular/forms";

export class usernameValidators {
  static DontGiveWhiteSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(" ") >= 0) {
      return { DontGiveWhiteSpace: true };
    } else {
      return null;
    }
  }
}
