// https://www.salesforcecodecrack.com/2019/10/display-reference-data-in-lwc.html
// https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.apex_call_imperative
// https://salesforce.stackexchange.com/questions/251299/force-refresh-view-in-lwc
// https://www.salesforcepoint.com/2020/08/lwc-refresh-apex-Example.html

import { LightningElement, wire } from "lwc";
import { refreshApex } from "@salesforce/apex";

// this will allow independent components to communicate
import { registerListener, unregisterAllListeners } from "c/pubsub";
// this is needed for the fireEvent parameters
import { CurrentPageReference } from "lightning/navigation";

import getAllAccountList from "@salesforce/apex/AccountListLwcController.getAllAccountList";
// Datatable Columns
const datatableColumns = [
  {
    label: "Account Name",
    fieldName: "Name",
    type: "text"
  },
  {
    label: "Account Phone",
    fieldName: "Phone",
    type: "phone"
  },
  {
    label: "Account Website",
    fieldName: "Website",
    type: "url"
  }
];

export default class SetListViewer extends LightningElement {
  data = [];
  columns = datatableColumns;
  wiredAccountList = []; // used for refreshApex

  @wire(CurrentPageReference) pageRef;

  @wire(getAllAccountList) accList(result) {
    this.wiredAccountList = result;

    if (result.data) {
      let currentData = [];

      result.data.forEach((row) => {
        let rowData = {};
        rowData.Name = row.Name;
        rowData.Phone = row.Phone;
        rowData.Website = row.Website;
        currentData.push(rowData);
      });
      this.data = currentData;
      console.log("Successful getAllAccountList wire");
    } else if (result.error) {
      window.console.log(result.error);
    }
  }

  refreshListViewer() {
    console.log("inside refreshListViewer");
    refreshApex(this.wiredAccountList);
  }

  renderedCallback() {
    console.log("rendered Callback");
    registerListener("pubsubaccountCreate", this.refreshListViewer, this);
  }

  // this callback will occur at the end of the LWC lifecycle and will turn off listening
  disconnectedCallback() {
    unregisterAllListeners(this);
  }
}
