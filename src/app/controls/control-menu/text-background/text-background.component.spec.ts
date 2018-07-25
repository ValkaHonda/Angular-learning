import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBackgroundComponent } from './text-background.component';

describe('TextBackgroundComponent', () => {
  let component: TextBackgroundComponent;
  let fixture: ComponentFixture<TextBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
