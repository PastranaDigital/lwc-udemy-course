import { LightningElement, wire } from "lwc";
// this will allow independent components to communicate
import { registerListener, unregisterAllListeners } from "c/pubsub";
// this is needed for the fireEvent parameters
import { CurrentPageReference } from "lightning/navigation";

export default class SelectedMeetingRoom extends LightningElement {
  selectedMeetingRoom = {};
  @wire(CurrentPageReference) pageRef;

  connectedCallback() {
    // registerListener(eventName, callback, thisArg)
    registerListener("pubsubtileclick", this.onMeetingRoomSelectHandler, this);
  }

  // callback used in registerListener
  onMeetingRoomSelectHandler(payload) {
    this.selectedMeetingRoom = payload;
  }

  // this callback will occur at the end of the LWC lifecycle and will turn off listening
  disconnectedCallback() {
    unregisterAllListeners(this);
  }
}
