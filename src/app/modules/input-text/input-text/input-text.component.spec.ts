import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ControlDataTableComponent } from 'src/app/shared/components/control-data-table/control-data-table.component';
import { StyleSelectorComponent } from 'src/app/shared/components/style-selector/style-selector.component';
import { StyleSelectorService } from 'src/app/shared/services/style-selector.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { CVAInputTextExampleComponent } from './cva-input-text/cva-input-text-example/cva-input-text-example.component';
import { CVAInputTextComponent } from './cva-input-text/cva-input-text/cva-input-text.component';
import { InputNumberMinMaxComponent } from './input-number-min-max/input-number-min-max.component';
import { InputTextEmailComponent } from './input-text-email/input-text-email.component';
import { InputTextMinMaxLengthComponent } from './input-text-min-max-length/input-text-min-max-length.component';
import { InputTextRequiredComponent } from './input-text-required/input-text-required.component';
import { InputTextSimpleComponent } from './input-text-simple/input-text-simple.component';
import { InputTextValidPatternComponent } from './input-text-valid-pattern/input-text-valid-pattern.component';

import { InputTextComponent } from './input-text.component';

describe('InputTextComponent', () => {
  let component: InputTextComponent;
  let fixture: ComponentFixture<InputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        MatInputModule
      ],
      declarations: [
        InputTextComponent,
        StyleSelectorComponent,
        InputTextSimpleComponent,
        InputTextRequiredComponent,
        InputTextMinMaxLengthComponent,
        InputTextEmailComponent,
        InputTextValidPatternComponent,
        InputNumberMinMaxComponent,
        CVAInputTextComponent,
        CVAInputTextExampleComponent,
        ControlDataTableComponent
      ],
      providers: [
        StyleSelectorService,
        FormBuilder
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Crear el componente InputTextComponent', () => {
    expect(component).toBeTruthy();
  });
});
