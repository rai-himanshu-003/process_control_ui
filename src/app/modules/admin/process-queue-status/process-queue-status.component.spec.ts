import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessQueueStatusComponent } from './process-queue-status.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PcCommonModule } from '../../pc-common/pc-common.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProcessQueueStatusComponent', () => {
  let component: ProcessQueueStatusComponent;
  let fixture: ComponentFixture<ProcessQueueStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessQueueStatusComponent ],
      imports: [HttpClientTestingModule, PcCommonModule, BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessQueueStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
