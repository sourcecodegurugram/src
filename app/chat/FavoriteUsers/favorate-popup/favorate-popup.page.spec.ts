import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavoratePopupPage } from './favorate-popup.page';

describe('FavoratePopupPage', () => {
  let component: FavoratePopupPage;
  let fixture: ComponentFixture<FavoratePopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoratePopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoratePopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
