import {Inject, Injectable} from '@angular/core';
import {Room, RoomList} from "../rooms";
import {APP_SERVICE_CONFIG} from "../../AppConfig/appconfig.service";
import {AppConfig} from "../../AppConfig/appconfig.interface";
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable, shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

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

  getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(
    shareReplay(1)
  );

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig, private http: HttpClient) {
    console.log("Rooms Service Initialized!");
    console.log(this.getRooms());
  }

  getRoomsLocal(): RoomList[] {
    return this.roomList;
  }

  getRooms(): Observable<RoomList[]> {
    return this.http.get<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList): Observable<RoomList[]> {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  deleteRoom(id: string): Observable<RoomList[]> {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      {
        reportProgress: true
      }
    );
    return this.http.request(request);
  }
}
