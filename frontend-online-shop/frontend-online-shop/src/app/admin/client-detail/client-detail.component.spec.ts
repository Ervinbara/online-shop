import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailComponentAdmin } from './client-detail.component';

describe('ClientDetailComponent', () => {
  let component: ClientDetailComponentAdmin;
  let fixture: ComponentFixture<ClientDetailComponentAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientDetailComponentAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientDetailComponentAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
