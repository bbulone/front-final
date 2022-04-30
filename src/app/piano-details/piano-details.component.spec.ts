import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoDetailsComponent } from './piano-details.component';

describe('PianoDetailsComponent', () => {
  let component: PianoDetailsComponent;
  let fixture: ComponentFixture<PianoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PianoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PianoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
