import { Component, OnInit ,Input,OnChanges,SimpleChange} from '@angular/core';
import {SortService} from '../services/sort.service';
import {DomSanitizer} from '@angular/platform-browser';
import {SelectModule} from 'ng2-select';
import { from } from 'rxjs/observable/from';
import { Validators } from '@angular/forms/src/validators';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnChanges {

  Links;
  ss: any[];
  type:string;
  items:string[] = ["All","Article","Video"];

  private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;

  @Input() course:string;
  @Input() SearchResult:any[];

  constructor(
    private sortService: SortService,
    private sanitizer: DomSanitizer,

  ) { }

  ngOnChanges(){
    if(!!this.course||!!this.SearchResult){
      console.log(this.course);
      console.log(this.SearchResult);
    }
  }

  private get disabledV():string {
    return this._disabledV;
  }
 
  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }
 
  public selected(value:any):void {
    console.log('Selected value is: ', value);
    this.type = value.text;
    console.log(this.type);
  }
 
  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }
 
  public typed(value:any):void {
    console.log('New search input: ', value);
  }
 
  public refreshValue(value:any):void {
    this.value = value;
  }


  init(){
      this.Links = this.SearchResult;
  }

  transform(url){
   return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


  sort(){

    this.sortService.getAlllink().subscribe(data =>{
        this.ss = new Array();
        if(this.type == "All"){
          this.ss = this.SearchResult;
        }else{
        for(var i=0;i<this.SearchResult.length;i++){
            
            if(this.SearchResult[i].contentType == this.type){
              this.ss.push(data[i]);
         }
          
        }
        }
        this.Links = this.ss;
       console.log(this.Links);
    });
  }

  ngOnInit() :void{

    console.log(this.course);
  }

}
