import {Component, Input, OnInit} from '@angular/core';
import {Room, RoomList} from "../rooms";

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = 'Hilton Hotel';

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] = [
    {
      roomType: 'Deluxe Room 1',
      amenities: 'Air Condition',
      price: 500,
      photos: "TempImageURL",
      checkInTime: new Date('13-Nov-2023'),
      checkOutTime: new Date('14-Nov-2023')
    },
    {
      roomType: 'Deluxe Room 2',
      amenities: 'NO Air Condition',
      price: 1000,
      photos: "TempImageURL",
      checkInTime: new Date('14-Nov-2023'),
      checkOutTime: new Date('15-Nov-2023')
    },
    {
      roomType: 'Deluxe Room 3',
      amenities: 'Air Condition',
      price: 3000,
      photos: "TempImageURL",
      checkInTime: new Date('15-Nov-2023'),
      checkOutTime: new Date('16-Nov-2023')
    }
  ]

  constructor() { }

  ngOnInit(): void {
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

    this.roomList = [...this.roomList, room];
    this.rooms = {
      availableRooms: (this.rooms.availableRooms ?? 0) + 1,
      bookedRooms: 10,
      totalRooms: 20
    }
  }

}
