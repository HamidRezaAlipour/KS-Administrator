import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessSectionComponent } from './access-section.component';

describe('AccessSectionComponent', () => {
  let component: AccessSectionComponent;
  let fixture: ComponentFixture<AccessSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
