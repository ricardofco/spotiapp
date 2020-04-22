import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DataCardComponent } from './components/shared/data-card/data-card.component';

//routes
import { ROUTES } from './app.routes';

//pipes
import { NoimagesPipe } from './pipes/noimages.pipe';
import {DomseguroPipe} from './pipes/domseguro.pipe';
import { AlertComponent } from './components/shared/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    LoadingComponent,
    DataCardComponent,
    NoimagesPipe,
    DomseguroPipe,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
