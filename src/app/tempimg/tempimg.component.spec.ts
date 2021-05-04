import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempimgComponent } from './tempimg.component';

describe('TempimgComponent', () => {
  let component: TempimgComponent;
  let fixture: ComponentFixture<TempimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempimgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
