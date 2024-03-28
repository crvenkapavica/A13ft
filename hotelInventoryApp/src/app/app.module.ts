import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './RoomManagement/rooms/rooms.component';
import { RoomListComponent } from './RoomManagement/room-list/room-list.component';
import { HighlightDirectiveDirective } from './Directives/highlight-directive.directive';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {APP_CONFIG, APP_SERVICE_CONFIG} from "./AppConfig/appconfig.service";

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomListComponent,
    HighlightDirectiveDirective,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
