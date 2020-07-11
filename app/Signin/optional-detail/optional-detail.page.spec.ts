import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OptionalDetailPage } from './optional-detail.page';

describe('OptionalDetailPage', () => {
  let component: OptionalDetailPage;
  let fixture: ComponentFixture<OptionalDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionalDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OptionalDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
