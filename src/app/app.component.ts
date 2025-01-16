import { Component } from '@angular/core';
import { PoliciesComponent } from "./policies/policies.component";

@Component({
  selector: 'app-root',
  imports: [PoliciesComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'InsurancePolicyFrontend';
}
