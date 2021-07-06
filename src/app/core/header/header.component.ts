import { Component, OnInit } from '@angular/core';
import { FilterDataService } from 'src/app/shared/services/filter-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private _filter: FilterDataService) { }

  ngOnInit(): void {
  }

  filterTable(e:any): void {
   this._filter.updateFilterString(e.target.value);
  }
}
