import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElipsispipePage } from './elipsispipe.page';

describe('ElipsispipePage', () => {
  let component: ElipsispipePage;
  let fixture: ComponentFixture<ElipsispipePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElipsispipePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElipsispipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
