import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GinComponent } from './gin.component';

describe('GinComponent', () => {
  let component: GinComponent;
  let fixture: ComponentFixture<GinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GinComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
