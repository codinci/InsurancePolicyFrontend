import { Component, OnInit } from '@angular/core';
import { PoliciesFormComponent } from "./policies-form/policies-form.component";
import { PolicyService } from '../shared/policy.service';
import { Policy } from '../shared/policy.model';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-policies',
  imports: [PoliciesFormComponent],
  templateUrl: './policies.component.html',
  styles: ``
})
export class PoliciesComponent implements OnInit {
  policyList: Policy[] = [];


  constructor(public service: PolicyService, private toastr: ToastrService ) {}

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedPolicy: Policy) {
    this.service.formData = Object.assign({}, selectedPolicy);
  }

  onDelete(id: number) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.service.deletePolicy(id)
      .subscribe({
        next: res => {
          console.log(res);
          this.service.refreshList();
          this.toastr.error('Deleted successfully', 'Policy register')
        },
        error: err => {
          console.error(err);
        }
      })
    }

  }

}
