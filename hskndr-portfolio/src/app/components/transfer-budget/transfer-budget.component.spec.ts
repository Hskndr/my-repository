import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferBudgetComponent } from './transfer-budget.component';

describe('TransferBudgetComponent', () => {
  let component: TransferBudgetComponent;
  let fixture: ComponentFixture<TransferBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
