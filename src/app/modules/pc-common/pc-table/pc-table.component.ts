/* eslint-disable */
import { trigger, state, style, transition, animate } from '@angular/animations';
import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {AppConstants} from 'src/app/constants/app-constant';
import {TableColumn} from 'src/app/models/pc-table-column';

@Component({
  selector: 'app-pc-table',
  templateUrl: './pc-table.component.html',
  styleUrls: ['./pc-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PcTableComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [];
  expandedColumns: TableColumn[] = [];
  expanded = false;
  @Input() dataSource: MatTableDataSource<any> = new MatTableDataSource();
  @Input() columns: TableColumn[] = [];

  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  @ViewChild('paginator')
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.columns.filter(e => !e.isExpanded)
    .map((tableColumn: TableColumn) => tableColumn.field).concat('Actions');
    if (this.checkIfExpandedColumns()) {
      this.expandedColumns = this.columns.filter(e => e.isExpanded);
      this.displayedColumns.unshift('expand');
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onEdit(row: any): void {
    this.edit.emit(row);
  }

  onDelete(row: any): void {
    this.delete.emit(row);
  }

  checkIfExpandedColumns(): boolean {  
    return this.columns.some(column => column.isExpanded);
  }

  undoDelete(row: any): void {
    row.action = AppConstants.UPDATE;
  }
}
