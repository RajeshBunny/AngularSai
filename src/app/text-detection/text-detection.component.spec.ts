import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDetectionComponent } from './text-detection.component';

describe('TextDetectionComponent', () => {
  let component: TextDetectionComponent;
  let fixture: ComponentFixture<TextDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
