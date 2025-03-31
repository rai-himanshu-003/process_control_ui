import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcTableComponent } from './pc-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PcCommonModule } from '../pc-common.module';
import { TableColumn } from 'src/app/models/pc-table-column';
import { EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

describe('PcTableComponent', () => {
  let component: PcTableComponent;
  let fixture: ComponentFixture<PcTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcTableComponent ],
      imports: [BrowserAnimationsModule, PcCommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcTableComponent);
    component = fixture.componentInstance;
    component.columns = [
      { field: 'name', header: 'Name', isExpanded: false },
      { field: 'age', header: 'Age' , isExpanded: false },
    ] as TableColumn[];

    let datasource = component.dataSource = new MatTableDataSource();
    datasource.data = [];
    component.edit = new EventEmitter<any>();
    component.delete = new EventEmitter<any>();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set displayedColumns on ngOnInit', () => {
    component.ngOnInit();
    expect(component.displayedColumns).toEqual(['name', 'age', 'Actions']);
  });

});

