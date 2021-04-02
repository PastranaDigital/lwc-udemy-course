import { LightningElement, wire } from "lwc";
import getCarTypes from "@salesforce/apex/CarSearchFormController.getCarTypes";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { NavigationMixin } from "lightning/navigation";

export default class CarSearchForm extends NavigationMixin(LightningElement) {
  carTypes;

  @wire(getCarTypes)
  wiredCarTypes({ data, error }) {
    if (data) {
      // create first element in array
      this.carTypes = [{ value: "", label: "All Car Types" }];
      // need to create an array of label and value because that is what the combobox accepts
      data.forEach((element) => {
        const carType = {};
        carType.label = element.Name; // set Name as label
        carType.value = element.Id; // set Id as value
        this.carTypes.push(carType);
      });
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

  handleCarTypeChange(event) {
    // grabs the Id from the selected option
    // the .value was set to the Id from the Apex wire method
    const carTypeId = event.detail.value;

    const carTypeSelectionChangeEvent = new CustomEvent("cartypeselect", {
      detail: carTypeId
    });
    this.dispatchEvent(carTypeSelectionChangeEvent);
  }

  createNewCarType() {
    this[NavigationMixin.Navigate]({
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Car_Type__c",
        actionName: "new"
      }
    });
  }
}
