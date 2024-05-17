import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselAComponent } from './carousel-a.component';

describe('CarouselAComponent', () => {
  let component: CarouselAComponent;
  let fixture: ComponentFixture<CarouselAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
