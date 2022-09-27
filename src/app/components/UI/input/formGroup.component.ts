import {Component, Input} from "@angular/core";

@Component({
  selector: "app-formGroup",
  templateUrl: "./formGroup.component.html",
  styleUrls: ["./formGroup.component.scss"]
})
export class FormGroupComponent{
  @Input() label = "";
  @Input() type = "";
  @Input() isDropdown = false;

  isOpen = false;

  onToggle(){
    this.isOpen = !this.isOpen;
    console.log(this.isOpen ? "open" : "close")
  }
}
