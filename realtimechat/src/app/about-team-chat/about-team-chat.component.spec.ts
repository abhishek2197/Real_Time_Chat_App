import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTeamChatComponent } from './about-team-chat.component';

describe('AboutTeamChatComponent', () => {
  let component: AboutTeamChatComponent;
  let fixture: ComponentFixture<AboutTeamChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTeamChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTeamChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
