import { LightningElement } from "lwc";
import getAccounts from "@salesforce/apex/AccountManagerImperative.getAccounts";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class AccountManagerApex extends LightningElement {
  numberOfRecords;
  accounts;

  get responseReceived() {
    if (this.accounts) {
      return true;
    }
    return false;
  }

  numberOfAccountsChangeHandler(event) {
    this.numberOfRecords = event.target.value;
  }

  getAccountsHandler() {
    getAccounts({ numberOfRecords: this.numberOfRecords })
      .then((response) => {
        this.accounts = response;
        if (this.accounts.length < this.numberOfRecords) {
          const toastEvent = new ShowToastEvent({
            title: "Accounts Loaded... but not as many as requested",
            message:
              "Only Found " + this.accounts.length + " Accounts From Server",
            variant: "warning"
          });
          this.dispatchEvent(toastEvent);
        } else {
          const toastEvent = new ShowToastEvent({
            title: "All Accounts Loaded",
            message: this.numberOfRecords + " Accounts Fetched From Server",
            variant: "success"
          });
          this.dispatchEvent(toastEvent);
        }
      })
      .catch((error) => {
        console.error("Error getting the accounts", error.body.message);
        const toastEvent = new ShowToastEvent({
          title: "ERROR",
          message: error.body.message,
          variant: "error"
        });
        this.dispatchEvent(toastEvent);
      });
  }
}
