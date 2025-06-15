import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFacture } from './list-facture';

describe('ListFacture', () => {
  let component: ListFacture;
  let fixture: ComponentFixture<ListFacture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListFacture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFacture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
