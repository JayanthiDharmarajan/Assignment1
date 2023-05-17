import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfSkillsComponent } from './prof-skills.component';

describe('ProfSkillsComponent', () => {
  let component: ProfSkillsComponent;
  let fixture: ComponentFixture<ProfSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfSkillsComponent]
    });
    fixture = TestBed.createComponent(ProfSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
