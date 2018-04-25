import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthSectionComponent } from './sixth-section.component';

describe('SixthSectionComponent', () => {
  let component: SixthSectionComponent;
  let fixture: ComponentFixture<SixthSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixthSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
