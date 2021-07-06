import { Component, OnInit } from '@angular/core';
import { DataType } from 'src/app/shared/models/data.type';
import { DataListService } from 'src/app/shared/services/data-list.service';

@Component({
  selector: 'app-saved-lists',
  templateUrl: './saved-lists.component.html',
  styleUrls: ['./saved-lists.component.scss']
})
export class SavedListsComponent implements OnInit {

  public dataList: Array<DataType> = [];
  public selectedEntitiesList: Array<string> = [];

  constructor(private _dataListService: DataListService) { }

  ngOnInit(): void {
    this._dataListService.getData().subscribe(data => {
      this.dataList = data.items;
    })
  }

  public openDetails(entitiesList: Array<string>) {
    this.selectedEntitiesList = entitiesList;
  }

}
