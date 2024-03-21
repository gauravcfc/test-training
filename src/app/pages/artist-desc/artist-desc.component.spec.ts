import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDescComponent } from './artist-desc.component';

describe('ArtistDescComponent', () => {
  let component: ArtistDescComponent;
  let fixture: ComponentFixture<ArtistDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistDescComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtistDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
