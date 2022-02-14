/**
 * Información para mostrar las rutas a los ejemplos
 */
 export interface ILink {
  /**
   * Orden para mostrar en pantalla
   */
  order: number;
  /**
   * Ruta de angular a cargar
   */
  route: string;
  /**
   * Titulo para mostrar en pantallaa
   */
  title: string;
}

/**
 * Define las opciones de los campos
 * de formulario que manejan un valor
 * y un etiqueta como los radio buttons
 */
export interface IOptionValueLabel {
  /**
   * Valor para la opción
   */
  value: string;
  /**
   * Etiqueta para la opción
   */
  label: string;
}

/**
 * Información de una opción
 * para un listado de provincias
 */
export interface IOptionState {
  /**
   * Código de la provincia
   */
  code: string;
  /**
   * Nombre de la provincia
   */
  state: string
}

/**
 * Información para las opciones del
 * componente para seleccionar idioma
 */
export interface ILangIcon {
  /**
   * Código del idioma
   */
  lang: string;
  /**
   * Nombre del idioma
   */
  name: string;
  /**
   * Indicador si es el seleccionado
   */
  selected: boolean;
}
