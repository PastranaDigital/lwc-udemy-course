import { LightningElement, api } from 'lwc';

export default class GetProfilePic2 extends LightningElement {
  @api recordId;

  get picUrl() {
    return `https://i.pravatar.cc/300?u=${this.recordId}`;
  }
}
