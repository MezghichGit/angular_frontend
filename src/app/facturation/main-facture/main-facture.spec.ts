import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFacture } from './main-facture';

describe('MainFacture', () => {
  let component: MainFacture;
  let fixture: ComponentFixture<MainFacture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainFacture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFacture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
