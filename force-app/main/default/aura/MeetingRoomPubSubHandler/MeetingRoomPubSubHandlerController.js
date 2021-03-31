({
  subscribeEvent: function (component) {
    const pubsubModule = component.find("pubSubModule");
    const callbackFunction = $A.getCallback(function (payload) {
      component.set("v.selectedMeetingRoom", payload);
    });

    pubsubModule.registerListener("pubsubtileclick", callbackFunction);
  }
});
