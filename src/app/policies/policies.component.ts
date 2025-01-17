import { Component, OnInit } from '@angular/core';
import { PoliciesFormComponent } from "./policies-form/policies-form.component";
import { PolicyService } from '../shared/policy.service';
import { Policy } from '../shared/policy.model';

@Component({
  selector: 'app-policies',
  imports: [PoliciesFormComponent],
  templateUrl: './policies.component.html',
  styles: ``
})
export class PoliciesComponent implements OnInit {
  policyList: Policy[] = [];

  constructor(public service: PolicyService) {}

  ngOnInit(): void {
    this.service.refreshList();
  }

}
