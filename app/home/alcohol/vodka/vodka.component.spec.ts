import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VodkaComponent } from './vodka.component';

describe('VodkaComponent', () => {
  let component: VodkaComponent;
  let fixture: ComponentFixture<VodkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VodkaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VodkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
