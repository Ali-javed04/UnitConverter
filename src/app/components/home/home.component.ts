import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { SimpleModalService } from 'ngx-simple-modal';
import { ConvertorService } from 'src/app/services/convertor.service';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currenturl: string = '';
  selectedValue:number

  category = [
    {
      categoryName:'distance',
      categoryId:1,
      converters:[{
        name:'Kilometers --> Miles',
        convertersId:1
      },
      {
        name:'Foot --> Meters',
        convertersId:2
      }]
    },
    {
      categoryName:'volume',
      categoryId:2,
      converters:[{
        name:'Ounces --> Liters',
        convertersId:3
      },
      {
        name:'Gallons --> Liters',
        convertersId:4
      }]
    },
    {
      categoryName:'speed',
      categoryId:3,
      converters:[{
        name:'Kilometer/hour --> Meters/sec',
        convertersId:5
      },
      {
        name:'Kilometer/hour --> Knots',
        convertersId:6
      }]
    },
  ]
  SelectedCategoryConverter:any[] = [
    {
      name:'select Converter',
      convertorId:1
    }
  ]
  selectedCategory: number;
  selectedConvertor: number;
  result: string;

  constructor(private router: Router,
    private activeRouter: ActivatedRoute ,
    private simpleModalService:SimpleModalService,
    private convertorService: ConvertorService) { }
  ngOnInit(): void {
    let page = this.activeRouter.snapshot.queryParams.page
    if(_.isNil(page) ) {
         this.currenturl = 'all'
       }else {
         this.currenturl = page
       }
   }
  currentState(url:string): boolean {
    return this.currenturl.includes(url)
   }
  public activePage(index){
    this.currenturl = index;
    this.router.navigate(['/'], { queryParams: { page: index } })
  }
  showConfirm(scategoryName,sConvertorName,selectedValue,result) {
    let disposable = this.simpleModalService.addModal(ConfirmComponent, {
      SelectedCategory:scategoryName,
      SelecetedConvertor:sConvertorName,
      SelecetedValue:selectedValue,
      answer:result
        })
        .subscribe((isConfirmed)=>{
            //We get modal result
            if(isConfirmed) {
              this.selectedValue = null
            }
            else {
              this.selectedValue = null
            }
        });

}
  changeCategory(event) {
    this.selectedCategory = event
    this.SelectedCategoryConverter = []
 const a = this.category.find(x=>x.categoryId == event).converters
    this.SelectedCategoryConverter = a
  }

  getResult() {
    if(this.selectedValue == undefined){
      return
    }else {
      let abc =  this.convertorService.getCalculatedValue(this.selectedCategory,this.selectedConvertor,this.selectedValue)
      this.result = abc
      let scategoryName = this.category.find(x=>x.categoryId == this.selectedCategory).categoryName
      let scategoryCovertors  =this.category.find(x=>x.categoryId == this.selectedCategory).converters
      let sConvertorName = scategoryCovertors.find(x=>x.convertersId == this.selectedConvertor).name
      this.selectedCategory
      this.showConfirm(scategoryName,sConvertorName,this.selectedValue,this.result)
    }
  }
  getDistanceResult() {
    this.selectedCategory = 1
    this.getResult()

  }
  getVolumeResult() {
    this.selectedCategory = 2
    this.getResult()

  }
  getSpeedResult() {
    this.selectedCategory = 3
    this.getResult()

  }

}
