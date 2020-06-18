import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Component, Inject, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { WarehouseService } from 'src/app/services/warehouse.service';


@Component({
    selector: 'dialog-user',
    templateUrl: './dialog.html',
    styleUrls: ['./dialog.scss'],

  })
  export class DialogComponent implements OnInit{
  
    newReqForm: FormGroup;
    err: Boolean =false;

    constructor(
      public warehouseSrv : WarehouseService,
      public dialogRef: MatDialogRef<DialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data) {}
  
    ngOnInit(){
      console.log(this.data.qty)
      
      this.newReqForm = new FormGroup({
        qty : new FormControl(null, Validators.compose([Validators.required, Validators.max(200)]))
      })

    }
    
    onNoClick(): void {
      this.dialogRef.close();
    }

    onSumbit(){
      if(this.newReqForm.controls['qty'].value > this.data.qty){
        this.err =true
      }else{
        this.err = false;
      this.warehouseSrv.updateQty(this.data.id, this.newReqForm.controls['qty'].value)
      this.dialogRef.close();
      }
    }
  
  }