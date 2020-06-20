import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlockedusersPage } from './blockedusers.page';

describe('BlockedusersPage', () => {
  let component: BlockedusersPage;
  let fixture: ComponentFixture<BlockedusersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockedusersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlockedusersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
