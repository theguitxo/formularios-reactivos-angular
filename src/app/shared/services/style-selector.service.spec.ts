import { COMPONENTS_STYLE } from "../shared.constants";
import { StyleSelectorService } from "./style-selector.service";

describe('Servicio StyleSelectorService', () => {

  let service: StyleSelectorService;

  beforeEach(() => {
    service = new StyleSelectorService();
  });

  it('#valor inicial para estilos ha de ser Bootstrap', (done: DoneFn) => {
    service.isBootstrap.subscribe(value => {
      expect(value).toBeTrue();
      done();
    });
  });

  it('#al cambiar a Material, isMaterial debe devolver true', (done: DoneFn) => {
    service.changeValue(COMPONENTS_STYLE.MATERIAL);

    service.isMaterial.subscribe(value => {
      expect(value).toBeTrue();
      done();
    });
  });
});
