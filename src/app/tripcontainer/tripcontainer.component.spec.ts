import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripcontainerComponent } from './tripcontainer.component';

describe('TripcontainerComponent', () => {
  let component: TripcontainerComponent;
  let fixture: ComponentFixture<TripcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripcontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
