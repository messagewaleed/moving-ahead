import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TeamsComponent } from './teams/teams.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CultureComponent } from './culture/culture.component';
import { LocationsComponent } from './locations/locations.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TeamsComponent,
    PageNotFoundComponent,
    CultureComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
