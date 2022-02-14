/**
 * Devuelve el contenido de un fichero JSON
 */
export class Utils {
  static getJSONDefault(data: any): any {
    return (data as any).default;
  }
}
