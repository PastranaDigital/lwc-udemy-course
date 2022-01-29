import { LightningElement, api, wire } from "lwc";
import getCars from "@salesforce/apex/CarSearchResultController.getCars";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class CarSearchResult extends LightningElement {
  @api carTypeId;
  cars;
  selectedCarId;

  // by swapping "this" for '$' we are making this wire adapter reactive
  @wire(getCars, { carTypeId: "$carTypeId" })
  wiredCars({ data, error }) {
    if (data) {
      this.cars = data;
    } else if (error) {
      this.showToast("ERROR", error.body.message, "error");
    }
  }

  showToast(title, message, variant) {
    const evt = new ShowToastEvent({
      title: title,
      message: message,
      variant: variant
    });
    this.dispatchEvent(evt);
  }

  get carsFound() {
    if (this.cars) {
      return true;
    }
    return false;
  }

  carSelectHandler(event) {
    const carId = event.detail; // we are only passing the car.Id
    this.selectedCarId = carId;
  }
}
