import { LightningElement } from "lwc";

export default class MeetingRooms extends LightningElement {
  selectedMeetingRoom;

  meetingRoomsInfo = [
    { roomName: "A203", roomCapacity: "12" },
    { roomName: "A204", roomCapacity: "20" },
    { roomName: "A205", roomCapacity: "12" },
    { roomName: "A206", roomCapacity: "26" },
    { roomName: "A207", roomCapacity: "20" },
    { roomName: "A208", roomCapacity: "12" },
    { roomName: "A209", roomCapacity: "26" }
  ];

  onTileSelectedTileHandler(event) {
    const meetingRoomInfo = event.detail;
    this.selectedMeetingRoom = meetingRoomInfo.roomName;
  }

  constructor() {
    super();
    this.template.addEventListener(
      "tileclick",
      this.onTileSelectedTileHandler.bind(this)
    );
  }
}
