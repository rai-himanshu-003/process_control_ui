import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Observable} from 'rxjs';
import { AppConstants } from 'src/app/constants/app-constant';
import {IBreadCrumb} from 'src/app/models/breadcrumb';
import {BreadcrumbService} from 'src/app/services/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  breadcrumbs$: Observable<IBreadCrumb[]> | undefined;

  @Input() searchKey!: string;

  @Output() search = new EventEmitter();
  @Output() clear = new EventEmitter();

  constructor(public breadcrumbService: BreadcrumbService) {
    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$;
  }

  applyFilter(): void {
    this.search.emit(this.searchKey);
  }

  clearSearch(): void {
    this.searchKey = AppConstants.EMPTY_STRING;
  }
}
