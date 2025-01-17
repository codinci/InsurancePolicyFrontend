import { Component } from '@angular/core';
import  {FormsModule, NgForm} from '@angular/forms';
import { PolicyService } from '../../shared/policy.service';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-policies-form',
  imports: [ FormsModule],
  templateUrl: './policies-form.component.html',
  styles: ``
})
export class PoliciesFormComponent {

  constructor(public service: PolicyService, private toastr: ToastrService) { }

  onSubmit(form: NgForm) {
    this.service.formSubmitted = true;
    if (form.valid) {
      if (this.service.formData.policyId == 0) {
        this.insertPolicy(form);
      } else {
        this.updatePolicy(form);
      }

    }
  }
  insertPolicy(form: NgForm) {
    this.service.postPolicy()
      .subscribe({
        next: res => {
          console.log(res);
          this.service.resetForm(form);
          this.service.refreshList();
          this.toastr.success('Inserted successfully', 'Policy register')
        },
        error: err => {
          console.error(err);
        }
      })
  }
  updatePolicy(form: NgForm) {
    this.service.updatePolicy()
      .subscribe({
        next: res => {
          console.log(res);
          this.service.resetForm(form);
          this.service.refreshList();
          this.toastr.info('Updated successfully', 'Policy register')
        },
        error: err => {
          console.error(err);
        }
      })
  }
  
}
