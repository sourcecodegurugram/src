import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotLoggedPopupPage } from './not-logged-popup.page';

describe('NotLoggedPopupPage', () => {
  let component: NotLoggedPopupPage;
  let fixture: ComponentFixture<NotLoggedPopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotLoggedPopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotLoggedPopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
