import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnbtnComponent } from './snbtn.component';

describe('SnbtnComponent', () => {
  let component: SnbtnComponent;
  let fixture: ComponentFixture<SnbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnbtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
