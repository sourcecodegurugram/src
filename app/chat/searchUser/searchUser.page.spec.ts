import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchUserPage } from "./SearchUser.page";

describe('Tabs2Page', () => {
  let component: SearchUserPage;
  let fixture: ComponentFixture<SearchUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
