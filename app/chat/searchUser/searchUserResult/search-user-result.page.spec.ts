import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchUserResultPage } from './search-user-result.page';

describe('SearchUserResultPage', () => {
  let component: SearchUserResultPage;
  let fixture: ComponentFixture<SearchUserResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUserResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchUserResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
