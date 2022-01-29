import { LightningElement } from "lwc";

export default class PublicMethodParent extends LightningElement {
  value;

  checkboxSelectHandler() {
    // querySelector(0 uses CSS selectors and returns the first element within
    // the document that matches the specified slector)
    const childComponent = this.template.querySelector("c-public-method-child");
    const returnedMessage = childComponent.selectCheckbox(this.value);
    console.log("Returned Message: " + returnedMessage);
  }

  onInputChangeHandler(ev) {
    this.value = ev.target.value;
  }
}
