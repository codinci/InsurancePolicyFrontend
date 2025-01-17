import { Component } from '@angular/core';
import  {FormsModule, NgForm} from '@angular/forms';
import { PolicyService } from '../../shared/policy.service';

@Component({
  selector: 'app-policies-form',
  imports: [ FormsModule],
  templateUrl: './policies-form.component.html',
  styles: ``
})
export class PoliciesFormComponent {

  constructor(public service: PolicyService) { }

  onSubmit(form: NgForm) {
    this.service.postPolicy()
      .subscribe({
        next: res => {
          console.log(res);
          form.reset();
          this.service.refreshList();
        },
        error: err => {console.error(err);
        }
    })
  }
}
