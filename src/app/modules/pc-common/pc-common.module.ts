import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {NavbarComponent} from "./navbar/navbar.component";
import { PcTableComponent } from './pc-table/pc-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { LoaderComponent } from './loader/loader.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    PcTableComponent,
    LoaderComponent,
    ConfirmationDialogComponent,
    BreadcrumbComponent,
    SidebarComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatSlideToggleModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ReactiveFormsModule
    
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    PcTableComponent,
    LoaderComponent,
    ConfirmationDialogComponent,
    BreadcrumbComponent,
    SidebarComponent
  ]
})
export class PcCommonModule { }
