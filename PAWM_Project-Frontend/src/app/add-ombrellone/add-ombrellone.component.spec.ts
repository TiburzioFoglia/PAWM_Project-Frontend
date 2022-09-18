import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOmbrelloneComponent } from './add-ombrellone.component';

describe('AddOmbrelloneComponent', () => {
  let component: AddOmbrelloneComponent;
  let fixture: ComponentFixture<AddOmbrelloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOmbrelloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOmbrelloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
