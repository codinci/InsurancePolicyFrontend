import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Policy } from './policy.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PolicyService {

  url: string = `${environment.apiBaseUrl}/Policy`;
  policyList: Policy[] = [];
  formData: Policy = new Policy();
  formSubmitted: boolean = false;

  constructor(private http: HttpClient) {}

  refreshList() {
    this.http.get(this.url).subscribe({
      next: (res) => {
        this.policyList = res as Policy[];
      },
      error: (err) => {
        console.error('Error fetching policies:', err);
      },
    });
  }

  postPolicy() {
    return this.http.post(this.url, this.formData)
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.formData = new Policy();
    this.formSubmitted = false;
  }

  updatePolicy() {
    return this.http.put(this.url + '/' + this.formData.policyId,  this.formData)
  }
  deletePolicy(id: number) {
    return this.http.delete(this.url + '/' + id)
  }
}