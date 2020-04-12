import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchTabPage } from './searchTab.page';

describe('Tabs2Page', () => {
  let component: SearchTabPage;
  let fixture: ComponentFixture<SearchTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
