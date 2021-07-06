import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataListService } from './services/data-list.service';
import { DescriptionComponent } from './components/description/description.component';
import { TableComponent } from './components/table/table.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    DescriptionComponent, TableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule
  ],
  exports: [TableComponent,DescriptionComponent]
})
export class SharedModule { }
