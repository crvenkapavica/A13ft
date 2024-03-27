import {AfterContentInit, Component, ContentChild, OnInit} from '@angular/core';
import {RoomListComponent} from "../RoomManagement/room-list/room-list.component";

@Component({
  selector: 'hinv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentInit {

  title: string = 'Welcome to Schatzyszs Hotels!';

  @ContentChild(RoomListComponent) roomListComponent!: RoomListComponent;

  ngOnInit(): void {

  }
  ngAfterContentInit(): void {
    this.roomListComponent.roomDepartment = 'NEW SHATZY ROOM DEPARTMENT (version 2)';
  }

}
