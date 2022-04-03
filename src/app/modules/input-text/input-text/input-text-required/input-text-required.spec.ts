import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";
import { SharedModule } from "src/app/shared/shared.module";
import { InputTextRequiredComponent } from "./input-text-required.component";

describe('Test unitario para el componente InputTextRequiredComponent', () => {
  let component: InputTextRequiredComponent;
  let fixture: ComponentFixture<InputTextRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        MatInputModule,
        NoopAnimationsModule
      ],
      declarations: [
        InputTextRequiredComponent
      ],
      providers: [
        StyleSelectorService,
        FormBuilder
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Crear el component InputTextRequiredComponent', () => {
    expect(component).toBeTruthy();
  });

  it('El control para el cuadro de texto es requerido', () => {
    const control = component.inputTextRequired;
    expect(control.hasValidator(Validators.required)).toBeTrue();
  });

  it('El control para el cuadro de texto valida que es requerido', () => {
    const control = component.inputTextRequired;
    const textInput: HTMLInputElement = getInputTextBootstrap(fixture);

    setValueIntoInput(textInput, 'TEST');

    expect(control.status).toEqual('VALID');
  });

  it('El cuadro de texto aplica la clase "is-valid" cuando es válido', () => {
    const textInput: HTMLInputElement = getInputTextBootstrap(fixture);

    setValueIntoInput(textInput, 'TEST');
    fixture.detectChanges();

    expect(textInput.classList.contains('is-valid')).toBeTruthy();
  });
});

function getInputTextBootstrap (fixture: ComponentFixture<InputTextRequiredComponent>): HTMLInputElement {
  return fixture.nativeElement.querySelector('#inputTextRequiredBootstrap');
}

function setValueIntoInput(input: HTMLInputElement, value: string): void {
  input.value = value;
  input.dispatchEvent(new Event('input'));
}

