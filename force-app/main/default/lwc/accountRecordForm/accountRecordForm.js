import { LightningElement, wire } from "lwc";
// this will allow independent components to communicate
import { fireEvent } from "c/pubsub";
// this is needed for the fireEvent parameters
import { CurrentPageReference } from "lightning/navigation";

// this established a hard reference for the Salesforce fields so if someone attempts to
// modify or delete them, Salesforce will intercede and/or update
import NAME_FIELD from "@salesforce/schema/Account.Name";
import PHONE_FIELD from "@salesforce/schema/Account.Phone";
import WEBSITE_FIELD from "@salesforce/schema/Account.Website";

export default class AccountRecordForm extends LightningElement {
  recordId; // because this is null, the form will appear in create mode
  // fieldsArray = ["Name", "Phone", "Website"]; // NOT hard referenced fields
  fieldsArray = [NAME_FIELD, PHONE_FIELD, WEBSITE_FIELD];

  @wire(CurrentPageReference) pageReference;

  successHandler() {
    console.log("successHandler");
    const accountCreated = new CustomEvent("accountCreate");
    console.log("before dispatchEvent");
    this.dispatchEvent(accountCreated);
    console.log("account created "); // + this.recordId.Name);

    // fireEvent(pageRef, eventName, payload)
    fireEvent(this.pageReference, "pubsubaccountCreate", this.fieldsArray);
    console.log("event fired");
  }
}
