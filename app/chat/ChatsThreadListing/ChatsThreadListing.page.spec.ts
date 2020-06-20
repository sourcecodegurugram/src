import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatsThreadListingPage } from './ChatsThreadListing.page';

describe('ChatsThreadListingPage', () => {
  let component: ChatsThreadListingPage;
  let fixture: ComponentFixture<ChatsThreadListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatsThreadListingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatsThreadListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
