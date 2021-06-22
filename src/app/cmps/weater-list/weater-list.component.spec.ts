import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaterListComponent } from './weater-list.component';

describe('WeaterListComponent', () => {
  let component: WeaterListComponent;
  let fixture: ComponentFixture<WeaterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
