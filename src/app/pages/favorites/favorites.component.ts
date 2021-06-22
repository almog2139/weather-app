import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  constructor(public storageService:StorageService) { }
  cities=null;

  ngOnInit(): void {
  this.cities = this.storageService.load('citiesDB')
  }

}
