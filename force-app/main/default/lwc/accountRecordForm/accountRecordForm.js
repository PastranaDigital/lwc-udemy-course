import { LightningElement } from "lwc";

// this established a hard reference for the Salesforce fields so if someone attempts to
// modify or delete them, Salesforce will intercede and/or update
import NAME_FIELD from "@salesforce/schema/Account.Name";
import PHONE_FIELD from "@salesforce/schema/Account.Phone";
import WEBSITE_FIELD from "@salesforce/schema/Account.Website";

export default class AccountRecordForm extends LightningElement {
  recordId; // because this is null, the form will appear in create mode
  // fieldsArray = ["Name", "Phone", "Website"]; // NOT hard referenced fields
  fieldsArray = [NAME_FIELD, PHONE_FIELD, WEBSITE_FIELD];

  successHandler(event) {
    this.recordId = event.detail.id;
  }
}
