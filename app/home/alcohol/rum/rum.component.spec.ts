import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RumComponent } from './rum.component';

describe('RumComponent', () => {
  let component: RumComponent;
  let fixture: ComponentFixture<RumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RumComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
