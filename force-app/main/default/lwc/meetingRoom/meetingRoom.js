import { LightningElement, api } from "lwc";

export default class MeetingRoom extends LightningElement {
  @api meetingRoomInfo = { roomName: "default", roomCapacity: "20" }; // public property coming in from parent component

  // the format {roomName:'A203', roomCapacity: '12'}
  // these are read only in the child component
  // could set a default value in child component
  // parent component update will trickle down

  @api showRoomInfo = false; // must be set to false by default since it is a child property

  tileClickHandler() {
    const tileClicked = new CustomEvent("tileclick", {
      detail: this.meetingRoomInfo
    });
    this.dispatchEvent(tileClicked);
    //console.log("tile clicked " + this.meetingRoomInfo.roomName);
  }
}
