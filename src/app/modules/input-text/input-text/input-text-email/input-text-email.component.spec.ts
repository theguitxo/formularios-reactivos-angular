import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";
import { COMPONENTS_STYLE } from "src/app/shared/shared.constants";
import { SharedModule } from "src/app/shared/shared.module";
import { InputTextEmailComponent } from "./input-text-email.component";

describe('Test para el componente InputTextEmailComponent', () => {
  let component: InputTextEmailComponent;
  let fixture: ComponentFixture<InputTextEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        MatInputModule,
        NoopAnimationsModule
      ],
      declarations: [
        InputTextEmailComponent
      ],
      providers: [
        StyleSelectorService,
        FormBuilder
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Crear el componente InputTextEmailComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Material: Si el e-mail no es válido ha de mostrar el mensaje de error', () => {
    component.styleSelectorService.changeValue(COMPONENTS_STYLE.MATERIAL);
    fixture.detectChanges();
    checkNotValidEmail(fixture, '#inputTextEmailMaterial', 'mat-error');
  });

  it('Bootstrap: Si el e-mail no es válido ha de mostrar el mensaje de error', () => {
    checkNotValidEmail(fixture, '#inputTextEmailBootstrap', '.invalid-feedback');
  });
});

function checkNotValidEmail(fixture: ComponentFixture<InputTextEmailComponent>, idInput: string, errorSelector: string): void {
  const textInput: HTMLInputElement = fixture.nativeElement.querySelector(idInput);
  textInput.value = 'TEST';
  textInput.dispatchEvent(new Event('input'));
  fixture.detectChanges();

  expect(fixture.nativeElement.querySelector(errorSelector)).toBeTruthy();
}
