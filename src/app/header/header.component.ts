import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  /**
   * Toggle navbar
   * 
   */
  toggleMenu(){
    let menu = document.getElementById('menu-toggle');
    menu.classList.toggle('transform');  
  }
}
