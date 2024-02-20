import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildCompComponent } from './content-child-comp.component';

describe('ContentChildCompComponent', () => {
  let component: ContentChildCompComponent;
  let fixture: ComponentFixture<ContentChildCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentChildCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentChildCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
