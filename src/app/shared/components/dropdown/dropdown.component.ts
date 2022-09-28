import {Component, Input} from "@angular/core";
import {Dropdown} from "./dropdown";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"]
})
export class DropdownComponent{
   @Input() options: Dropdown[] = []
}
