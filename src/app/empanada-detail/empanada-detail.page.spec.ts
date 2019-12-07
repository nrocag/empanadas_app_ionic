import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmpanadaDetailPage } from './empanada-detail.page';

describe('EmpanadaDetailPage', () => {
  let component: EmpanadaDetailPage;
  let fixture: ComponentFixture<EmpanadaDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpanadaDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmpanadaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
