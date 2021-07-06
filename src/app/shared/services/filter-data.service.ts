import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterDataService {

  private _filterString = new Subject<string>();

  filterString = this._filterString.asObservable();

  updateFilterString(value: string) {
    this._filterString.next(value);
  }
  constructor() { }
}
