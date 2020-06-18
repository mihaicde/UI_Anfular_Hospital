import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/mockData/product.model';
import { MatTableDataSource } from '@angular/material/table';
import { WarehouseService } from 'src/app/services/warehouse.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  products : ProductModel[]=[];
  dataSource = new MatTableDataSource(this.products);
  displayedColumns: string[] = ['Name', 'Description', 'Quantity'];
  constructor(
    public warehouseSrv : WarehouseService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.products = this.warehouseSrv.getMyProducts();
    console.log(this.products)
    this.dataSource = new MatTableDataSource(this.products);
    
  }

  onSubmit(){
    this.router.navigate(['..'])
    
  }


}
