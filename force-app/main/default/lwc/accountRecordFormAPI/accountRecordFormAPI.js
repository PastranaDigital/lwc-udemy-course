import { LightningElement, api } from "lwc";

export default class AccountRecordFormAPI extends LightningElement {
  // these two will be passed by the framework when on an app builder record page
  @api recordId; // because this is null, the form will appear in create mode
  @api objectApiName;

  successHandler() {}
}
