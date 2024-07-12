import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LwtComponent } from './lwt.component';

describe('LwtComponent', () => {
  let component: LwtComponent;
  let fixture: ComponentFixture<LwtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LwtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LwtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
