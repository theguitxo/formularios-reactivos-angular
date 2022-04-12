import { FormControl } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

/**
 * Devuelve el contenido de un fichero JSON
 */
export class Utils {
  static getJSONDefault(data: any): any {
    return data.default;
  }
}

export class ErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return !!(control?.invalid && !control?.pristine);
  }
}

export class ErrorMatcherNoPristine implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return !!(control?.invalid);
  }
}
