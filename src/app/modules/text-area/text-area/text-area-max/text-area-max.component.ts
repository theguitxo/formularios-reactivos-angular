import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";
import { SharedClass } from "src/app/shared/shared.class";
import { ErrorMatcher } from "src/app/shared/utils.class";

@Component({
  selector: 'app-text-area-max',
  templateUrl: './text-area-max.component.html',
  styles: [`
    .text-area-max {
      height: 10rem;
      resize: none;
    }

    mat-error {
      &[align='end'] {
        justify-content: flex-end;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextAreaMaxComponent extends SharedClass implements OnInit {
  textAreaMaxControl!: FormControl;
  textAreaMaxControlMatcher!: ErrorStateMatcher;

  labelTextArea = 'Introduzca un texto';

  constructor(
    private readonly fb: FormBuilder,
    styleSelectorService: StyleSelectorService
  ) {
    super(styleSelectorService);
  }

  ngOnInit(): void {
    this.buildTextAreaMaxControl();
  }

  buildTextAreaMaxControl(): void {
    this.textAreaMaxControl = this.fb.control({
      value: '',
      disabled: false
    }, [
      Validators.required,
      Validators.maxLength(25)
    ]);

    this.textAreaMaxControlMatcher = new ErrorMatcher();
  }
}
