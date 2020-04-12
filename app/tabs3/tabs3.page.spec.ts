import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tabs3Page } from './tabs3.page';

describe('Tabs3Page', () => {
  let component: Tabs3Page;
  let fixture: ComponentFixture<Tabs3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabs3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tabs3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
