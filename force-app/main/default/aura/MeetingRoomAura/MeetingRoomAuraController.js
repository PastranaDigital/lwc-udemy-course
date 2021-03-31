({
  doInit: function (component) {
    component.set("v.meetingRoomInfo", [
      { roomName: "A203", roomCapacity: "12" },
      { roomName: "A204", roomCapacity: "20" },
      { roomName: "A205", roomCapacity: "12" },
      { roomName: "A206", roomCapacity: "26" },
      { roomName: "A207", roomCapacity: "20" },
      { roomName: "A208", roomCapacity: "12" },
      { roomName: "A209", roomCapacity: "26" }
    ]);
  },

  onTileClickHandler: function (component, event) {
    component.set("v.selectedMeetingRoom", event.getParam("roomName"));
  }
});
