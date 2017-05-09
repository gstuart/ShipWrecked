import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScareComponent } from './scare.component';

describe('ScareComponent', () => {
  let component: ScareComponent;
  let fixture: ComponentFixture<ScareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
