import { LightningElement, api, wire } from "lwc";
// this will allow independent components to communicate
import { fireEvent } from "c/pubsub";
// this is needed for the fireEvent parameters
import { CurrentPageReference } from "lightning/navigation";

export default class MeetingRoom extends LightningElement {
  @api meetingRoomInfo = { roomName: "default", roomCapacity: "20" }; // public property coming in from parent component

  // the format {roomName:'A203', roomCapacity: '12'}
  // these are read only in the child component
  // could set a default value in child component
  // parent component update will trickle down

  @api showRoomInfo = false; // must be set to false by default since it is a child property

  @wire(CurrentPageReference) pageReference;

  // set bubbles property to true, to allow you event to bubble up to parent components
  tileClickHandler() {
    const tileClicked = new CustomEvent("tileclick", {
      detail: this.meetingRoomInfo,
      bubbles: true
    });
    this.dispatchEvent(tileClicked);
    //console.log("tile clicked " + this.meetingRoomInfo.roomName);

    // fireEvent(pageRef, evenetName, payload)
    fireEvent(this.pageReference, "pubsubtileclick", this.meetingRoomInfo);
  }
}
