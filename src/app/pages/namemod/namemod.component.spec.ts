import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamemodComponent } from './namemod.component';

describe('NamemodComponent', () => {
  let component: NamemodComponent;
  let fixture: ComponentFixture<NamemodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NamemodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NamemodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
