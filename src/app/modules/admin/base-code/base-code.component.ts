import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {AppConstants} from 'src/app/constants/app-constant';
import {BaseCode} from 'src/app/models/base-code-dto';
import {TableColumn} from 'src/app/models/pc-table-column';
import {CommonService} from 'src/app/services/common.service';
import { DialogService } from 'src/app/services/dialog/dialog.service';

@Component({
  selector: 'app-base-code',
  templateUrl: './base-code.component.html',
  styleUrls: ['./base-code.component.scss'],
})
export class BaseCodeComponent implements OnInit {
  basecode: BaseCode[] = [];
  dataSource: MatTableDataSource<BaseCode> = new MatTableDataSource();
  column: TableColumn[] = [
    {header: 'Type', field: 'codeTypeBase', isExpanded: false},
    {header: 'Description', field: 'baseCodeDescription', isExpanded: false},
    {header: 'Category', field: 'codeCategory', isExpanded: false},
    // {header: 'Updated By', field: 'lastUpdatedBy', isExpanded: false},
    // {header: 'Last Update TimeStamp', field: 'lastUpdatedTs', isExpanded: false},
  ];
  searchKey: string = AppConstants.EMPTY_STRING;

  constructor(
    private service: CommonService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.initialize();
  }

  applyFilter(searchKey: string): void {
    this.dataSource.filter = searchKey.trim().toLowerCase();
  }

  clearSearch(): void {
    console.log('clear search');
    
    this.applyFilter(AppConstants.EMPTY_STRING);
  }

  edit(row: BaseCode): void {
    console.log('update base ----', row);
  }

  delete(row: BaseCode): void {
    this.dialogService.openDialog('Delete Confirmation', 'Are you sure want to delete ? ').subscribe(result => {
      if (result) {
        this.onDeleteConfirm(row);
      }
    });
  }

  add(): void {
    console.log('add base');
  }

  private onDeleteConfirm(row: BaseCode): void {
    this.dataSource.data = this.dataSource.data.filter(data => data !== row);
  }

  private initialize(): void {
    this.service.getBaseCode().subscribe(data => {
      this.basecode = data;
      this.updateDataSource();
    });
  }

  private updateDataSource(): void {
    this.dataSource.data = this.basecode;
  }
}
