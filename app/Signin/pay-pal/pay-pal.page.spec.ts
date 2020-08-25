import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PayPalPage } from './pay-pal.page';

describe('PayPalPage', () => {
  let component: PayPalPage;
  let fixture: ComponentFixture<PayPalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayPalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PayPalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
