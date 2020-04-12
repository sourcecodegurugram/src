import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocationTargettingPage } from './location-targetting.page';

describe('LocationTargettingPage', () => {
  let component: LocationTargettingPage;
  let fixture: ComponentFixture<LocationTargettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationTargettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocationTargettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
