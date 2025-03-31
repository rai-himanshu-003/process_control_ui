import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCodeComponent } from './base-code.component';
import { CommonService } from 'src/app/services/common.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PcCommonModule } from '../../pc-common/pc-common.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BaseCodeComponent', () => {
  let component: BaseCodeComponent;
  let fixture: ComponentFixture<BaseCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseCodeComponent ],
      providers: [CommonService],
      imports: [HttpClientTestingModule, PcCommonModule, FormsModule, BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
