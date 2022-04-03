import { TestBed } from "@angular/core/testing";
import { HomeComponent } from "./home.component";

describe('HomeComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
    }).compileComponents();
  });

  it('Crear el componente HomeComponent', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
