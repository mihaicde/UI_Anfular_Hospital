import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { warehouse1 } from '../../../mockData/warehouse.mock';
import { DialogComponent } from './pop-ups/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductModel } from 'src/app/mockData/product.model';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  products : ProductModel[];
  dataSource = new MatTableDataSource(this.products);
  displayedColumns: string[] = ['Name', 'Description', 'Quantity', 'Add'];
  search ;
  constructor(
    public dialog: MatDialog,
    public warehouseSrv : WarehouseService
  ) { 


  }

  ngOnInit(): void {
    this.products = this.warehouseSrv.getProducts();
    this.dataSource = new MatTableDataSource(this.products);
    
  }

  openDialog(row): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
