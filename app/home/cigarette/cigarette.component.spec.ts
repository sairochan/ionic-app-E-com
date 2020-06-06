import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CigaretteComponent } from './cigarette.component';

describe('CigaretteComponent', () => {
  let component: CigaretteComponent;
  let fixture: ComponentFixture<CigaretteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CigaretteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CigaretteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
