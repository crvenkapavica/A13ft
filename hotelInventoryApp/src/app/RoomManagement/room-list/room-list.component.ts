import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {RoomList} from "../rooms";

@Component({
  selector: 'hinv-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomListComponent implements OnInit, OnChanges {

  @Input() rooms: RoomList[] | null = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  bRoomsChanged: boolean = false;

  roomDepartment: string = "Old Shatzy Room Department";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rooms'].firstChange) {
      this.bRoomsChanged = true;
    }
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

}
