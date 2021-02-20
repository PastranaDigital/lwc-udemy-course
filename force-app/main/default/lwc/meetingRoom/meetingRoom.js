import { LightningElement, api } from "lwc";

export default class MeetingRoom extends LightningElement {
  @api meetingRoomInfo; // public property coming in from parent component
  // the format {roomName:'A203', roomCapacity: '12'}
  // these are read only in the child component
  // could set a default value in child component
  // parent component update will trickle down

  @api showRoomInfo = false; // must be set to false by default since it is a child property
}