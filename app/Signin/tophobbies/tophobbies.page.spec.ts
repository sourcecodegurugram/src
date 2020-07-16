import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TophobbiesPage } from './tophobbies.page';

describe('TophobbiesPage', () => {
  let component: TophobbiesPage;
  let fixture: ComponentFixture<TophobbiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TophobbiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TophobbiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
