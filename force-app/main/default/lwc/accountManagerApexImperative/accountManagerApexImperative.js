import { LightningElement } from "lwc";
import getAccounts from "@salesforce/apex/AccountManagerImperative.getAccounts";

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
      })
      .catch((error) => {
        console.error("Error getting the accounts", error.body.message);
      });
  }
}
