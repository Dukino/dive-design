import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;
  faPhoneAlt = faPhoneAlt;

  constructor() {}

  ngOnInit(): void {}
}
