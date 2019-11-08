import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomrComponent } from './somr.component';

describe('SomrComponent', () => {
  let component: SomrComponent;
  let fixture: ComponentFixture<SomrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
