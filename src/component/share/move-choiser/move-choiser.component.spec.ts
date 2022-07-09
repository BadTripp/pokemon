import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveChoiserComponent } from './move-choiser.component';

describe('MoveChoiserComponent', () => {
  let component: MoveChoiserComponent;
  let fixture: ComponentFixture<MoveChoiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveChoiserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveChoiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
