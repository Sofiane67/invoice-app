import {Component, Input} from "@angular/core";
import {Dropdown} from "../dropdown/dropdown";

@Component({
  selector: "app-form-group",
  templateUrl: "./form-group.component.html",
  styleUrls: ["./form-group.component.scss"]
})
export class FormGroupComponent{
  @Input() label = "";
  @Input() type = "";
  @Input() isDropdown = false;
  @Input() options: Dropdown[] = [];
  @Input() isFilter = false;

  isOpen = false;


  onToggle(){
    this.isOpen = !this.isOpen;
    console.log(this.options)
    console.log(this.isOpen ? "open" : "close")
  }
}
