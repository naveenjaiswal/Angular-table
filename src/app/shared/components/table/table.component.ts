import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataType } from '../../models/data.type';
import { FilterDataService } from '../../services/filter-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() dataList: Array<DataType> = [];
  @Output() entitiesEmitter = new EventEmitter<Array<string>>();
  activeIndex: number = -1;
  filterSubscriptions: Subscription;
  backupDataList: Array<DataType> = [];

  constructor(private _filter: FilterDataService) { }

  ngOnInit(): void {
    this.filterSubscriptions = this._filter.filterString.subscribe(value => {
      this.dataList = this.backupDataList.filter((item: DataType) => item.title.includes(value));
    }
    )
  };

  ngOnDestroy(): void {
    this.filterSubscriptions.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dataList && changes.dataList.currentValue) {
      this.backupDataList = [...changes.dataList.currentValue];
    }
  }

  public openDetails(entitiesList: Array<string>, index: number): void {
    this.activeIndex = index;
    this.entitiesEmitter.emit(entitiesList);
  }

}
