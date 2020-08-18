import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrialOverPage } from './trial-over.page';

describe('TrialOverPage', () => {
  let component: TrialOverPage;
  let fixture: ComponentFixture<TrialOverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialOverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrialOverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
