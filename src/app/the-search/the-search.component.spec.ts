import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheSearchComponent } from './the-search.component';

describe('TheSearchComponent', () => {
  let component: TheSearchComponent;
  let fixture: ComponentFixture<TheSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
