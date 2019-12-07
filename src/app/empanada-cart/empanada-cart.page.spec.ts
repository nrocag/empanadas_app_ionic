import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmpanadaCartPage } from './empanada-cart.page';

describe('EmpanadaCartPage', () => {
  let component: EmpanadaCartPage;
  let fixture: ComponentFixture<EmpanadaCartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpanadaCartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmpanadaCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
