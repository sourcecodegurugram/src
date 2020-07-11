import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { userDetailPage } from './userDetail.page';

describe('userDetailPage', () => {
  let component: userDetailPage;
  let fixture: ComponentFixture<userDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ userDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(userDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
