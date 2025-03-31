import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppConstants } from 'src/app/constants/app-constant';
import { TableColumn } from 'src/app/models/pc-table-column';
import { ProcessQueueStatus } from 'src/app/models/process-queue-status';
import { ProcessQueueStatusService } from 'src/app/services/admin/process-queue-status.service';
import { DialogService } from 'src/app/services/dialog/dialog.service';

@Component({
  selector: 'app-process-queue-status',
  templateUrl: './process-queue-status.component.html',
  styleUrls: ['./process-queue-status.component.scss']
})
export class ProcessQueueStatusComponent implements OnInit {

  data: ProcessQueueStatus[] = [];
  dataSource: MatTableDataSource<ProcessQueueStatus> = new MatTableDataSource();
  column: TableColumn[] = [
    {header: 'PIN', field: 'PIN', isExpanded: false},
    {header: 'RULE_ID', field: 'RULE_ID', isExpanded: false},
    {header: 'DOCUMENT_ID', field: 'DOCUMENT_ID', isExpanded: false},
    {header: 'STATUS', field: 'STATUS', isExpanded: false},
    {header: 'MESSAGE', field: 'MESSAGE', isExpanded: true},
    {header: 'VALUES', field: 'VALUES', isExpanded: true},
  ];
  searchKey: string = AppConstants.EMPTY_STRING;

  constructor(
    private queueStatusService: ProcessQueueStatusService,
     private dialogService: DialogService) { }  

  ngOnInit(): void {
    this.initialize();
  }

  applyFilter(searchKey: string): void {
    this.dataSource.filter = searchKey.trim().toLowerCase();
  }

  clearSearch(): void {
    this.applyFilter(AppConstants.EMPTY_STRING);
  }

  edit(row: ProcessQueueStatus): void {
    console.log('update base ----', row);
  }

  delete(row: ProcessQueueStatus): void {
    this.dialogService.openDialog('Delete Confirmation', 'Are you sure want to delete ? ').subscribe(result => {
      if (result) {
        this.onDeleteConfirm(row);
      }
    });
  }

  add(): void {
    console.log('add queue status');
  }

  private onDeleteConfirm(row: ProcessQueueStatus): void {
    this.dataSource.data = this.dataSource.data.filter(data => data !== row);
  }
    
  private initialize(): void {
    this.queueStatusService.getQueueStatus().subscribe(data => {
      this.data = data;
      this.updateDataSource();
    });
  }

  private updateDataSource(): void {
    this.dataSource.data = this.data;
  }

}
