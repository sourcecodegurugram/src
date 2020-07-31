import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatsupportPage } from './chatsupport.page';

describe('ChatsupportPage', () => {
  let component: ChatsupportPage;
  let fixture: ComponentFixture<ChatsupportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatsupportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatsupportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
