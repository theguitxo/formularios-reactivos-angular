import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { StyleSelectorService } from "../../services/style-selector.service";
import { COMPONENTS_STYLE } from "../../shared.constants";

/**
 * Componente para selector la librería de estilos: Material o Bootstrap
 */
@Component({
  selector: 'app-style-selector',
  templateUrl: './style-selector.component.html'
})
export class StyleSelectorComponent implements OnInit {
  /**
   * Estilo por defecto a aplicar
   */
  @Input() default!: COMPONENTS_STYLE;

  /**
   * Indica si se ha seleccionado Bootstrap
   */
  isBootstrap!: Observable<boolean>;
  /**
   * Indica si se ha seleccionado Material
   */
  isMaterial!: Observable<boolean>;

  /**
   * Opciones de estilo
   */
  optionsStyle = COMPONENTS_STYLE;

  /**
   * Método constructor
   */
  constructor(
    private readonly styleSelectorService: StyleSelectorService
  ) {}

  /**
   * Método al iniciar el componente:
   * Setea si el estilo es Bootstrap o Material
   */
  ngOnInit(): void {
    this.isBootstrap = this.styleSelectorService.isBootstrap;
    this.isMaterial = this.styleSelectorService.isMaterial;

    if (this.default) {
      this.styleSelectorService.changeValue(this.default);
    }
  }

  /**
   * Método a llamar cuando se cambia de estilo a aplicar
   */
  changeTo(value: COMPONENTS_STYLE): void {
    this.styleSelectorService.changeValue(value);
  }
}
