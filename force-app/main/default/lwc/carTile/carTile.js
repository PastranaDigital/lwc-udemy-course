import { LightningElement, api, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';

export default class CarTile extends LightningElement {
  @api car; // coming from the carSearch component
  @api carSelectedId;

  @wire(CurrentPageReference) pageRef;

  carSelectHandler(event) {
    // the default action of this anchor tag will be prevented
    event.preventDefault();
    // console.log("car selected");
    const carId = this.car.Id;

    const carSelect = new CustomEvent('carselect', { detail: carId });
    this.dispatchEvent(carSelect);

    // sends information to the carDetails component
    fireEvent(this.pageRef, 'carselect', this.car);
  }

  get isCarSelected() {
    // console.log("this.car.Id: " + this.car.Id);
    if (this.car.Id === this.carSelectedId) {
      return 'tile selected';
    }
    return 'tile';
  }
}
