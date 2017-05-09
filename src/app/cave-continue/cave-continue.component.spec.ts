import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaveContinueComponent } from './cave-continue.component';

describe('CaveContinueComponent', () => {
  let component: CaveContinueComponent;
  let fixture: ComponentFixture<CaveContinueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaveContinueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaveContinueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
