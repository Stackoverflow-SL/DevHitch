import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GroupItemComponent } from './group-item.component';

describe('GroupItemComponent', () => {
  let component: GroupItemComponent;
  let fixture: ComponentFixture<GroupItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
