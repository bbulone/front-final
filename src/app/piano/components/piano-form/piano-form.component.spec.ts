import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoFormComponent } from './piano-form.component';

describe('PianoFormComponent', () => {
  let component: PianoFormComponent;
  let fixture: ComponentFixture<PianoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PianoFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PianoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
