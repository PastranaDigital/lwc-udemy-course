import { LightningElement, api } from "lwc";

export default class CarTile extends LightningElement {
  @api car; // coming from the carSearch component
  @api carSelectedId;

  carSelectHandler(event) {
    // the default action of this anchor tag will be prevented
    event.preventDefault();
    const carId = this.car.Id;

    const carSelect = new CustomEvent("carselect", { detail: carId });
    this.dispatchEvent(carSelect);
  }

  get isCarSelected() {
    if (this.car.Id === this.carSelectedId) {
      return "tile selected";
    }
    return "tile";
  }
}
