import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { COMPONENTS_STYLE } from "../shared.constants";

@Injectable()
export class StyleSelectorService {
  private valueChanged$ = new BehaviorSubject<COMPONENTS_STYLE>(COMPONENTS_STYLE.BOOTSTRAP);
  private isBootstrap$ = new BehaviorSubject<boolean>(true);
  private isMaterial$ = new BehaviorSubject<boolean>(false);

  get valueChanged(): Observable<COMPONENTS_STYLE> {
    return this.valueChanged$.asObservable();
  }

  get isBootstrap(): Observable<boolean> {
    return this.isBootstrap$.asObservable();
  }

  get isMaterial(): Observable<boolean> {
    return this.isMaterial$.asObservable();
  }

  changeValue(value: COMPONENTS_STYLE): void {
    this.valueChanged$.next(value);
    this.isBootstrap$.next(value === COMPONENTS_STYLE.BOOTSTRAP);
    this.isMaterial$.next(value === COMPONENTS_STYLE.MATERIAL);
  }
}
