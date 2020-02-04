import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupthingComponent } from './signupthing.component';

describe('SignupthingComponent', () => {
  let component: SignupthingComponent;
  let fixture: ComponentFixture<SignupthingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupthingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupthingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
