import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmqComponent } from './mmq.component';

describe('MmqComponent', () => {
  let component: MmqComponent;
  let fixture: ComponentFixture<MmqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MmqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
