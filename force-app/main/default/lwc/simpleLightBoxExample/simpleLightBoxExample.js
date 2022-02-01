import { LightningElement } from 'lwc';
//? the static resource 3rd party library
// import slb from "@salesforce/resourceUrl/simplelightbox2";
//? these are used to load the JS into this LWC
//? both of these have promises
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';

export default class SimpleLightBoxExample extends LightningElement {
  slbLoaded = false; //? limits the rendered callback to only run once

  //? using renderedCallback incase your static resource is trying to modify the components markup
  //? could also be done in the connectedCallback (but you cannot modify your DOM)
  //   renderedCallback() {
  //     if (!this.slbLoaded) {
  //       Promise.all([
  //         //? bring in the CSS from the library (could have multiple of these if needed)
  //         loadStyle(this, slb + "/simpleLightbox/dist/simpleLightbox.css"),
  //         //? bring in the JS from the library (could have multiple of these if needed)
  //         loadScript(this, slb + "/simpleLightbox/dist/simpleLightbox.js")
  //       ])
  //         .then(() => {
  //           this.slbLoaded = true;
  //         })
  //         .catch((error) => {
  //           console.error("Error initializing simple light box: ", error);
  //         });
  //     }
  //   }

  //   openGallery() {
  //     SimpleLightbox.open({
  //       items: [
  //         "/resource/cars/van/maruti_suzuki_eeco.jpg",
  //         "/resource/cars/luxury/mercedes_benz_gls.jpg",
  //         "/resource/cars/sports/Audi_R8_V10_Plus.jpg"
  //       ]
  //     });
  //   }
}
