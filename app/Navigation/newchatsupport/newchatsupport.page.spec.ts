import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewchatsupportPage } from './newchatsupport.page';

describe('NewchatsupportPage', () => {
  let component: NewchatsupportPage;
  let fixture: ComponentFixture<NewchatsupportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewchatsupportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewchatsupportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
