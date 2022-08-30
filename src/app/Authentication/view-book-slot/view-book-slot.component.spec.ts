import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookSlotComponent } from './view-book-slot.component';

describe('ViewBookSlotComponent', () => {
  let component: ViewBookSlotComponent;
  let fixture: ComponentFixture<ViewBookSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBookSlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBookSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
