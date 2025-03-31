import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbComponent } from './breadcrumb.component';
import { PcCommonModule } from '../pc-common.module';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbComponent ],
      imports: [PcCommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
