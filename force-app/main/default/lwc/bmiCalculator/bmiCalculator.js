import { LightningElement, track } from "lwc";

export default class BmiCalculator extends LightningElement {
  cardTitle = "BMI Calculator";
  weight;
  height;
  @track bmiCalculation;
  alertDivClass;

  getBMIButtonHandler() {
    if (this.weight != null && this.height != null) {
      this.bmiCalculation = (
        (703 * this.weight) /
        (this.height * this.height)
      ).toFixed(2);
      if (this.bmiCalculation >= 30) {
        this.alertDivClass = "high";
      } else if (this.bmiCalculation <= 20) {
        this.alertDivClass = "low";
      } else {
        this.alertDivClass = "medium";
      }
      console.log("value: ", this.bmiCalculation);
    }
  }

  onWeightChangeHandler(event) {
    this.weight = event.target.value;
  }

  onHeightChangeHandler(event) {
    this.height = event.target.value;
  }
}
