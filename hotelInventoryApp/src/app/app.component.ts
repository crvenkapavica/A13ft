import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit, ChangeDetectorRef,
  Component,
  ComponentRef, ContentChild, ContentChildren,
  ElementRef, OnChanges,
  OnInit, QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {RoomsComponent} from "./RoomManagement/rooms/rooms.component";
import {RoomListComponent} from "./RoomManagement/room-list/room-list.component";
import {RoomList} from "./RoomManagement/rooms";

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit {

  title = 'hotelInventoryApp';

  roomList: RoomList[] = [];

  componentRef!: ViewContainerRef;

  @ViewChildren(HeaderComponent) headerComponent!: QueryList<HeaderComponent>;

  @ViewChild('vc', {static: true, read: ViewContainerRef}) vcr!: ViewContainerRef;

  @ViewChild('roomContainer', {static: true, read: ViewContainerRef}) rooms!: ViewContainerRef;
  @ViewChild(RoomListComponent, {static: true}) roomListComponent!: RoomListComponent;
  @ViewChild(RoomsComponent, {static: true}) roomComponent!: RoomsComponent;

  @ContentChild(RoomListComponent) roomListContent!: RoomListComponent;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.rooms.availableRooms = 0;
    this.roomList = componentRef.instance.roomList;
    this.roomListComponent.rooms = this.roomList;
    this.cd.detectChanges();
  }

  ngAfterViewInit(): void {
    this.headerComponent.forEach(item => item.title = "Welcome to reworked Shatzy Hotels!");
  }

  ngAfterViewChecked(): void {

  }

  ngAfterContentInit(): void {
    //this.initializeRoomList();
    //this.roomListContent.rooms = this.roomList;
  }

  async initializeRoomList(): Promise<void> {
    this.roomListComponent.rooms = await this.fetchRoomListFromAPI();
  }

  async fetchRoomListFromAPI(): Promise<RoomList[]> {
    return new Promise<RoomList[]>((resolve, reject) => {
      setTimeout(() => {
        const roomList: RoomList[] = this.vcr.element.nativeElement.roomList;
        resolve(roomList);
      }, 300);
    });
  }

  getComp = (): string => "ComponentName";
}
