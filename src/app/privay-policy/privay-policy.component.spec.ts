import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivayPolicyComponent } from './privay-policy.component';

describe('PrivayPolicyComponent', () => {
  let component: PrivayPolicyComponent;
  let fixture: ComponentFixture<PrivayPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivayPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivayPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
