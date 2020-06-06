import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NonAlcholicComponent } from './non-alcholic.component';

describe('NonAlcholicComponent', () => {
  let component: NonAlcholicComponent;
  let fixture: ComponentFixture<NonAlcholicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonAlcholicComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NonAlcholicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
