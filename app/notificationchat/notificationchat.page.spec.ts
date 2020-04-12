import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificationchatPage } from './notificationchat.page';

describe('NotificationchatPage', () => {
  let component: NotificationchatPage;
  let fixture: ComponentFixture<NotificationchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationchatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
