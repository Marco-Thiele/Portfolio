import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  images = ['1', '2', '3']
  imagesName = ['DABubble','Join', 'El Pollo Loco'];
  typs = ['Angular | TypeScript | Firebase','JavaScript | CSS | HTML', 'JavaScript | CSS | HTML'];
  description = [ 'Chat messanger inspired by Slack. Contact your colleagues and exchange ideas with them.',
    'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories',
    'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    ];



  /**
   * show the correct github
   * 
   * @param i number
   */  
  showGithub(i: number) {
    if (i == 0) {
      window.open('https://github.com/Marco-Thiele/DABubble-Portfolio');
    }
    if (i == 1) {
      window.open('https://github.com/Marco-Thiele/Join-Portfolio');
    }
    if (i == 2) {
      window.open('https://github.com/Marco-Thiele/El-Pollo-Locco');
    }
  }


  /**
   * show the correct live demo
   * 
   * @param i number
   */
  showApp(i: number){
    if (i == 0) {
      window.open('https://dabubble.marco-thiele.com');
    }
    if (i == 1) {
      window.open('https://marco-thiele.com/Join-Portfolio/index.html');
    }
    if (i == 2) {
      window.open('https://marco-thiele.com/EL_PoLLo_Loco/index.html');
    }
  }
}
