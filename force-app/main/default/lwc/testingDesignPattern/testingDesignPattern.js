import { LightningElement } from "lwc";

export default class TestingDesignPattern extends LightningElement {
  paragraph;

  handleClick() {
    console.log("clicked");
    this.paragraph =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid doloribus illo culpa! Recusandae voluptates non neque quae culpa, aperiam itaque, magnam, inventore amet officiis dolorum illum autem? Suscipit sed necessitatibus dolor, alias tempora, doloremque possimus cumque id esse vitae fugit?";
  }
}
