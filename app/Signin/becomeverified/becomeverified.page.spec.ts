import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BecomeverifiedPage } from './becomeverified.page';

describe('BecomeverifiedPage', () => {
  let component: BecomeverifiedPage;
  let fixture: ComponentFixture<BecomeverifiedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeverifiedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BecomeverifiedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
