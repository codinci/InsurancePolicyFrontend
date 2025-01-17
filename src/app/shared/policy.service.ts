import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Policy } from './policy.model';

@Injectable({
  providedIn: 'root',
})
export class PolicyService {

  url: string = `${environment.apiBaseUrl}/Policy`;
  policyList: Policy[] = [];
  formData: Policy = new Policy();

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
}