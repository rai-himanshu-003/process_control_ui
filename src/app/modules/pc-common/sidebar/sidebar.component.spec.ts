import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import { PcCommonModule } from '../pc-common.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      imports: [PcCommonModule, BrowserAnimationsModule, RouterTestingModule],
      providers: [SidebarService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
