import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFacture } from './add-facture';

describe('AddFacture', () => {
  let component: AddFacture;
  let fixture: ComponentFixture<AddFacture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddFacture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFacture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
