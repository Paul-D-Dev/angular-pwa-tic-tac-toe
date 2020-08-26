import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallBtnComponent } from './install-btn.component';

describe('InstallBtnComponent', () => {
  let component: InstallBtnComponent;
  let fixture: ComponentFixture<InstallBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
