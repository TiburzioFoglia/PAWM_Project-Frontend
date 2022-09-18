import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOmbrelloneComponent } from './delete-ombrellone.component';

describe('DeleteOmbrelloneComponent', () => {
  let component: DeleteOmbrelloneComponent;
  let fixture: ComponentFixture<DeleteOmbrelloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteOmbrelloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteOmbrelloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
