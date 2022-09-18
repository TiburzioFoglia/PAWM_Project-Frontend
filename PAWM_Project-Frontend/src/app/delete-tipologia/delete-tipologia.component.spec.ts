import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTipologiaComponent } from './delete-tipologia.component';

describe('DeleteTipologiaComponent', () => {
  let component: DeleteTipologiaComponent;
  let fixture: ComponentFixture<DeleteTipologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTipologiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTipologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
