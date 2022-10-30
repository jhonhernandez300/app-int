import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThePlayerComponent } from './the-player.component';

describe('ThePlayerComponent', () => {
  let component: ThePlayerComponent;
  let fixture: ComponentFixture<ThePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThePlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
