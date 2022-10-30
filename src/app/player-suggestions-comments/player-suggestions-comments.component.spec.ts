import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSuggestionsCommentsComponent } from './player-suggestions-comments.component';

describe('PlayerSuggestionsCommentsComponent', () => {
  let component: PlayerSuggestionsCommentsComponent;
  let fixture: ComponentFixture<PlayerSuggestionsCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerSuggestionsCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerSuggestionsCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
