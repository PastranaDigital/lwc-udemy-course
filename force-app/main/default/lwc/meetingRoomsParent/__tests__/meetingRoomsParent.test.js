import { createElement } from "lwc";
import MeetingRoomsParent from "c/meetingRoomsParent";

describe("c-meetingRoomsParent", () => {
  afterEach(() => {
    // removing all the elements from our DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  // one of the tests for this LWC
  it("count the number of meeting room component iterations", () => {
    // create the component
    const meetingRooms = createElement("c-meetingRoomsParent", {
      is: MeetingRoomsParent
    });

    document.body.appendChild(meetingRooms);
    // stores all of the meeting room components
    const allMeetingRoomComponents = meetingRooms.shadowRoot.querySelectorAll(
      "c-meeting-room"
    );
    // count the number of components & assert this value
    expect(allMeetingRoomComponents.length).toBe(7); // could also use 'not to be'
  });

  it("check the title of the lightning-card", () => {
    // create the component
    const meetingRooms = createElement("c-meetingRoomsParent", {
      is: MeetingRoomsParent
    });

    document.body.appendChild(meetingRooms);

    const lightningCardComponent = meetingRooms.shadowRoot.querySelector(
      "lightning-card"
    );
    expect(lightningCardComponent.title).toBe("Meeting Rooms");
  });
});
