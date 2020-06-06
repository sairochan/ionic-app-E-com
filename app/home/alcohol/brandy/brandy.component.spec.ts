import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrandyComponent } from './brandy.component';

describe('BrandyComponent', () => {
  let component: BrandyComponent;
  let fixture: ComponentFixture<BrandyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrandyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
