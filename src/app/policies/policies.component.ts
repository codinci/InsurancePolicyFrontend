import { Component, OnInit } from '@angular/core';
import { PoliciesFormComponent } from "./policies-form/policies-form.component";
import { PolicyService } from '../shared/policy.service';

@Component({
  selector: 'app-policies',
  imports: [PoliciesFormComponent],
  templateUrl: './policies.component.html',
  styles: ``
})
export class PoliciesComponent implements OnInit {

  constructor(public service: PolicyService) {}

  ngOnInit(): void {
    this.service.refreshList();
  }

}
