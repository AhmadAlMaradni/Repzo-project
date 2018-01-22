import { Component, OnInit,ViewChild ,Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  constructor(public dialog: MatDialog) {}

  public lineChartData:Array<any> = [
    {data: [1, 10, 18, 29, 40, 60, 75,81,90,101,110,111,119], label: 'Series A'}
  ];
  public lineChartLabels:Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 


select1 = [
    {value: 'Reps-0', viewValue: 'Reps '},
    {value: 'Reps-1', viewValue: 'Reps 1'}
  ];

select2 = [
    {value: 'Client-0', viewValue: 'Client'},
    {value: 'pizza-1', viewValue: 'Client 1'}
  ];

   date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());



// Table Info

displayedColumns = ['position', 'Reps', 'Name', 'Date','Time','Total','Action'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(eleSelect) {
    this.dialog.open(DialogDataInvoice, {
       width: '60%'
    });
    console.log(eleSelect);
  }

  ExportData() {
    new Angular2Csv(ELEMENT_DATA, 'Repzo Report');
  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}

@Component({
  selector: 'dialog-data-Invoice',
  templateUrl: 'dialog-data-Invoice.html',
  styleUrls: ['./main-page.component.css']
})
export class DialogDataInvoice {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

export interface Element {
  Reps: string;
  position: number;
  Name: string;
  Date: string;
  Time: string;
  Total: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, Reps: 'Mohammad Abdallah', Name: 'cozmo', Date: '2018-01-05',Time: '08:35:11 PM',Total:'3.1'},
  {position: 2, Reps: 'Mohammad Abdallah', Name: 'carrefour', Date: '2018-02-01',Time: '01:35:11 PM',Total:'3.99'},
  {position: 3, Reps: 'Mohammad Abdallah', Name:  'smartbuy',Date: '2018-05-09',Time: '02:35:11 PM',Total:'55.03'},
  {position: 4, Reps: 'Mohammad Abdallah', Name: 'stob$shob' ,Date: '2018-06-06',Time: '05:35:55 PM',Total:'3.03'},
  {position: 5, Reps: 'Mohammad Abdallah', Name: 'smartbuy', Date: '2018-01-05',Time: '05:02:55 PM',Total:'3.03'},
  {position: 6, Reps: 'Mohammad Abdallah', Name: 'cozmo', Date: '2018-01-05',Time: '05:02:55 PM',Total:'1.04'},
  {position: 7, Reps: 'Mohammad Abdallah', Name: 'smartbuy', Date: '2018-06-04',Time: '14:02:55 PM',Total:'2.04'},
  {position: 8, Reps: 'Mohammad Abdallah', Name: 'cozmo', Date: '2018-01-05',Time: '15:02:55 PM',Total:'3.04'},
  {position: 9, Reps: 'Mohammad Abdallah', Name: 'smartbuy', Date: '2018-01-03',Time: '11:35:55 PM',Total:'10.03'},
  {position: 10, Reps: 'Mohammad Abdallah', Name:'cozmo', Date: '2018-03-05',Time: '08:35:55 PM',Total:'20.04'},
  {position: 11, Reps: 'Mohammad Abdallah', Name: 'smartbuy', Date: '2018-01-05',Time: '08:35:55 PM',Total:'20.04'},
  {position: 12, Reps: 'Mohammad Abdallah', Name: 'smartbuy', Date: '2018-01-05',Time: '08:35:55 PM',Total:'30.04'},
  {position: 13, Reps: 'Mohammad Abdallah', Name: 'cozmo', Date: '2018-22-04',Time: '08:35:55 PM',Total:'20.04'},
  {position: 14, Reps: 'Mohammad Abdallah', Name: 'smartbuy', Date: '2018-01-05',Time: '08:35:55 PM',Total:'3.03'},
  {position: 15, Reps: 'Mohammad Abdallah', Name: 'smartbuy', Date: '2018-01-05',Time: '08:35:55 PM',Total:'3.03'},
  {position: 16, Reps: 'Mohammad Abdallah', Name: 'cozmo', Date: '2018-01-05',Time: '08:35:55 PM',Total:'32.03'},
  {position: 17, Reps: 'Mohammad Abdallah', Name: 'smartbuy', Date: '2018-01-05',Time: '08:35:55 PM',Total:'23.03'},
  {position: 18, Reps: 'Mohammad Abdallah', Name: 'cozmo', Date: '2018-01-05',Time: '15:35:55 PM',Total:'43.03'},
  {position: 19, Reps: 'Mohammad Abdallah', Name: 'smartbuy', Date: '2018-01-05',Time: '20:35:55 PM',Total:'13.03'},
  {position: 20, Reps: 'Mohammad Abdallah', Name: 'cozmo', Date: '2018-01-05',Time: '08:35:55 PM',Total:'3.03'},
];