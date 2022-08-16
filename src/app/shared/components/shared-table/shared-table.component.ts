import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumn } from '@shared/models/tableColumns';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.scss'],
})
export class SharedTableComponent implements OnInit {
  @Input() columns: Array<TableColumn> = [];
  // @Input() columns!: [];
  @Input() dataSource: Observable<any[]> = of([]);

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  data!: any;

  // public matDataSource = new MatTableDataSource<any>();
  // dataSource$!: Observable<any[]>;

  displayedColumns: string[] = [];
  value: string = "";

  constructor() {}

  ngOnInit(): void {
    // set table columns
    this.displayedColumns = this.displayedColumns.concat(
      this.columns.map((x) => x.columnDef)
    );

    // set pagination
    // this.dataSource = new MatTableDataSource<any>(this.dataset);
    // this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.subscribe((x) => {
      // this.data = new MatTableDataSource<any[]>(x);

      this.data = new MatTableDataSource<any[]>(x);
      this.data.paginator = this.paginator;

      // this.data.paginator = this.paginator;
      // this.matDataSource.data = x;
      // this.matDataSource.paginator = this.paginator;
      // this.matDataSource.sort = this.sort;

      // The important part:
      // this.changeDetectorRef.detectChanges();
    });

    // this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();
  }
}
