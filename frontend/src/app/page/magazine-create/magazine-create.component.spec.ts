import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineCreateComponent } from './magazine-create.component';

describe('MagazineCreateComponent', () => {
  let component: MagazineCreateComponent;
  let fixture: ComponentFixture<MagazineCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazineCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazineCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
