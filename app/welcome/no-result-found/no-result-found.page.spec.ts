import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoResultFoundPage } from './no-result-found.page';

describe('NoResultFoundPage', () => {
  let component: NoResultFoundPage;
  let fixture: ComponentFixture<NoResultFoundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoResultFoundPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoResultFoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
