import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CultureComponent } from './culture/culture.component';
import { LocationsComponent } from './locations/locations.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    children:[
      {path: 'locations', component: LocationsComponent},
      {path: 'culture', component: CultureComponent}
    ]
  },
  {path: 'teams', component: TeamsComponent},
  {path: '', redirectTo: 'about', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
