import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProvider } from './details-provider';

describe('DetailsProvider', () => {
  let component: DetailsProvider;
  let fixture: ComponentFixture<DetailsProvider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsProvider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsProvider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
