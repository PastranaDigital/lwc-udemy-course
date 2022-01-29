import { LightningElement, api } from 'lwc';
import getExperiences from '@salesforce/apex/CarExperience.getExperiences';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class CarExperiences extends NavigationMixin(LightningElement) {
  //   @api carId;
  //? instead we are going to declare it with getter and setters to track any changes in it
  //? the setter is where you will run any logic for the change
  privateCarId;
  @api
  get carId() {
    return this.privateCarId;
  }
  set carId(value) {
    this.privateCarId = value;
    this.getCarExperiences();
  }

  carExperiences = [];

  connectedCallback() {
    this.getCarExperiences();
  }

  //? added @api to make this public so the parent can call it when an experience is added
  @api
  getCarExperiences() {
    //? this way anytime the user adds a new experience we can get it on this component
    getExperiences({ carId: this.privateCarId })
      .then((experiences) => {
        this.carExperiences = experiences;
      })
      .catch((error) => {
        this.showToast('ERROR', error.body.message, 'error');
      });
  }

  userClickHandler(event) {
    const userId = event.target.getAttribute('data--userid');
    this[NavigationMixin.Navigate]({
      type: 'standard__recordPage',
      attributes: {
        recordId: userId,
        objectApiName: 'User',
        actionName: 'view',
      },
    });
  }

  showToast(title, message, variant) {
    const evt = new ShowToastEvent({
      title: title,
      message: message,
      variant: variant,
    });
    this.dispatchEvent(evt);
  }

  get hasExperiences() {
    if (this.carExperiences.length > 0) {
      return true;
    }
    return false;
  }
}
