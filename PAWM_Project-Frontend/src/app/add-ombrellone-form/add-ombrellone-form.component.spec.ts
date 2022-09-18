import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOmbrelloneFormComponent } from './add-ombrellone-form.component';

describe('AddOmbrelloneFormComponent', () => {
  let component: AddOmbrelloneFormComponent;
  let fixture: ComponentFixture<AddOmbrelloneFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOmbrelloneFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOmbrelloneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
