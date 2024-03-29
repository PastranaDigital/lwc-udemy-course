import { LightningElement, api } from "lwc";

export default class PublicMethodChild extends LightningElement {
  value = ["red", "blue"]; // sets the default value(s)

  options = [
    { label: "Red Marker", value: "red" },
    { label: "Blue Marker", value: "blue" },
    { label: "Green Marker", value: "green" },
    { label: "Black Marker", value: "black" }
  ];

  @api
  selectCheckbox(checkboxValue) {
    const selectedCheckbox = this.options.find((checkbox) => {
      return checkboxValue === checkbox.value;
    });

    if (selectedCheckbox) {
      this.value = selectedCheckbox.value;
      return "Successfully checked";
    }
    this.value = []; // clears out the default checkboxes
    return "No checkbox found";
  }
}
