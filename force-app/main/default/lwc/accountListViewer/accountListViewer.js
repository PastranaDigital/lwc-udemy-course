// https://www.salesforcecodecrack.com/2019/10/display-reference-data-in-lwc.html
// https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.apex_call_imperative

import { LightningElement, wire } from "lwc";
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

  //  @wire(getAllAccountList) ACCOUNT;
  @wire(CurrentPageReference) pageRef;

  /*@wire(getAllAccountList)
  accList({ error, data }) {
    if (data) {
      let currentData = [];

      data.forEach((row) => {
        let rowData = {};
        rowData.Name = row.Name;
        rowData.Phone = row.Phone;
        rowData.Website = row.Website;
        currentData.push(rowData);
      });
      this.data = currentData;
      console.log("Successful getAllAccountList");
    } else if (error) {
      window.console.log(error);
    }
  }
  */

  getAll() {
    getAllAccountList()
      .then((result) => {
        let currentData = [];

        result.forEach((row) => {
          let rowData = {};
          rowData.Name = row.Name;
          rowData.Phone = row.Phone;
          rowData.Website = row.Website;
          currentData.push(rowData);
        });
        this.data = currentData;
        console.log("Successful getAllAccountList");
      })
      .catch((error) => {
        this.error = error;
      });
  }

  connectedCallback() {
    // registerListener(eventName, callback, thisArg)
    this.getAll();
    console.log("Connected Callback in accountListViewer");
    registerListener("pubsubaccountCreate", this.getAll, this);
  }

  // this callback will occur at the end of the LWC lifecycle and will turn off listening
  disconnectedCallback() {
    unregisterAllListeners(this);
  }
}
