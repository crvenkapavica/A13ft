import {Component, OnDestroy, OnInit} from '@angular/core';
import {Room, RoomList} from "../rooms";
import {RoomsService} from "../services/rooms.service";
import {Observable, Observer, Subscription} from "rxjs";
import {HttpEventType} from "@angular/common/http";

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, OnDestroy {

  hotelName = 'Hilton Hotel';

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] = [];

  stream = new Observable(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
  });

  observer: Observer<any> = {
    next: (value => console.log(value)),
    error: err => console.log(err),
    complete: (() => console.log("complete"))
  }

  totalBytes: number = 0;

  subscription!: Subscription;

  rooms$: Observable<RoomList[]> = this.roomService.getRooms$;

  constructor(private roomService: RoomsService) {
  }

  ngOnInit(): void {
    //this.roomList = roomService.getRoomsLocal();
    this.stream.subscribe(this.observer);

    // this.subscription = this.roomService.getRooms$.subscribe(observer=> {
    //   this.roomList = observer;
    // })

    this.roomService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request made!');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
          break;
        }
      }
    })
  }

  selectRoom(room: RoomList): void {
    console.log(room);
  }

  addRoom(): void {
    const room: RoomList = {
      roomType: 'Deluxe Room 3',
      amenities: 'Air Condition',
      price: 3000,
      photos: "TempImageURL",
      checkInTime: new Date('15-Nov-2021'),
      checkOutTime: new Date('16-Nov-2021')
    };
    //this.roomList = [...this.roomList, room];

    // this.roomService.addRoom(room).subscribe(data => {
    //   this.roomList = data;
    // })

        // used cached rooms to just display them
    this.roomService.getRooms$.subscribe(data => {
      this.roomList = data;
    })

    this.rooms = {
      availableRooms: (this.rooms.availableRooms ?? 0) + 1,
      bookedRooms: 10,
      totalRooms: 20
    }
  }

  deleteRoom(id: string): void {;
    this.roomService.deleteRoom(id).subscribe(data => {
      this.roomList = data;
    })
  }

  ngOnDestroy(): void {
    // if (this.subscription) {
    //   this.subscription.unsubscribe();
    // }
  }

}
