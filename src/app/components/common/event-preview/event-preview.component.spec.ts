import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPreviewComponent } from './event-preview.component';

describe('EventPreviewComponent', () => {
  let component: EventPreviewComponent;
  let fixture: ComponentFixture<EventPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
