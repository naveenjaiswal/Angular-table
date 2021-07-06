import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedListsComponent } from './components/saved-lists/saved-lists.component';

const routes: Routes = [
  { path: 'savedList', component: SavedListsComponent },
  { path: '', redirectTo: '/savedList', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
