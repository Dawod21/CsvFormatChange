import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesReportComponent } from './cases-report.component';

describe('CasesReportComponent', () => {
  let component: CasesReportComponent;
  let fixture: ComponentFixture<CasesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasesReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
