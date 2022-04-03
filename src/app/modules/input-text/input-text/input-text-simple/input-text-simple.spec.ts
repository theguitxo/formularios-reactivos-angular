import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, FormControl } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { By } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";
import { COMPONENTS_STYLE } from "src/app/shared/shared.constants";
import { SharedModule } from "src/app/shared/shared.module";
import { InputTextSimpleComponent } from "./input-text-simple.component";

describe('Test unitario para el componente InputTextSimpleComponent', () => {
  let component: InputTextSimpleComponent;
  let fixture: ComponentFixture<InputTextSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        MatInputModule,
        NoopAnimationsModule
      ],
      declarations: [
        InputTextSimpleComponent
      ],
      providers: [
        StyleSelectorService,
        FormBuilder
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Crear el componente InputTextSimpleComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Si el estilo es bootstrap debe mostrar el componente con estilo bootstrap', () => {
    const inputElementDebug: DebugElement = fixture.debugElement;
    const boostrapInputDebug = inputElementDebug.query(By.css('#input-text-simple-bootstrap'));

    expect(boostrapInputDebug).toBeTruthy();
  });

  it('Si el estilo es material debe mostrar el componente con estilo material', () => {
    component.styleSelectorService.changeValue(COMPONENTS_STYLE.MATERIAL);
    fixture.detectChanges();

    const inputElementDebug: DebugElement = fixture.debugElement;
    const boostrapInputDebug = inputElementDebug.query(By.css('#input-text-simple-material'));

    expect(boostrapInputDebug).toBeTruthy();
  });

  it('Comprobar que se crea el control para el cuadro de texto', () => {
    expect(component.inputText).toBeDefined();
  });

  it('Comprobar que el control es del tipo "FormControl"', () => {
    expect(component.inputText).toBeInstanceOf(FormControl);
  });
});
