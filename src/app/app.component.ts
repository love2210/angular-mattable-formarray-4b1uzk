import { Component, OnInit, AfterViewInit, ViewChild, AfterContentInit } from '@angular/core';
import {AspDatePipe} from './aspDate.pipe';
import {cHttpDataService} from './httpGet.service';
import {CTableComponent} from './cTable/cTable';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit {
  @ViewChild(CTableComponent) ctable:CTableComponent;
  public name = 'Angular';
  public myDate:string;

  constructor(private adPipe:AspDatePipe,private cfgHttp:cHttpDataService){};

  ngOnInit():void{
    this.myDate=this.adPipe.transform('/Date(1479859200000)/',"MM/dd/yy");    
  };

  ngAfterViewInit(){
    
   }

  ngAfterContentInit(){}

  private loaddatatable():void{
    this.ctable.setDataSource();
  }

}
