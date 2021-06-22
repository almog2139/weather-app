import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  cityName:string=''
  @Output() onSearch=new EventEmitter<string>()
   

  constructor() { }

  ngOnInit(): void {
  }
  onSearchCity(){
    console.log('here');
    
    this.onSearch.emit(this.cityName)

  }

}
