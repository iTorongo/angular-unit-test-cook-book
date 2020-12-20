import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  isPublic = true;

  constructor() { }

  ngOnInit(): void {
  }

  togglePrivacy(): void {
    this.isPublic = !this.isPublic;
  }

  get message(): string {
    return `Privacy is set to
      <span class="badge badge-pill badge-dark">
      ${this.isPublic ? 'Public' : 'Private'}
      </span>`;
  }
}
