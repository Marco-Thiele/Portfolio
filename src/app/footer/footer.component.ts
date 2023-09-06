import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private router: Router, public sharedService: SharedService) { }

  navigateToImpressum() {
    console.log(this.sharedService.impressum)
    this.sharedService.impressum = true
    console.log(this.sharedService.impressum)
  }
}
