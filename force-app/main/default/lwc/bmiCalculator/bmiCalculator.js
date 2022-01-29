import { LightningElement, track } from "lwc";
// this common javascript code can be used in any LWC you want
import { getBMI } from "c/bmi";

export default class BmiCalculator extends LightningElement {
  cardTitle = "BMI Calculator";
  // using track for this because it is not a primitive variable
  @track bmiData = {
    weight: 0,
    height: 0,
    result: 0
  };
  alertDivClass;

  getBMIButtonHandler() {
    this.bmiData.result = getBMI(this.bmiData.weight, this.bmiData.height);

    if (this.bmiData.result >= 30) {
      this.alertDivClass = "high";
    } else if (this.bmiData.result <= 20) {
      this.alertDivClass = "low";
    } else {
      this.alertDivClass = "medium";
    }
    console.log("value: ", this.bmiData.result);
  }

  onWeightChangeHandler(event) {
    this.bmiData.weight = event.target.value;
  }

  onHeightChangeHandler(event) {
    this.bmiData.height = event.target.value;
  }
}
