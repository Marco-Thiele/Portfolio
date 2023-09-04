import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  images = ['1', '2', '3']
  imagesName = ['Join', 'El Pollo Loco', 'Pokedex'];
  typs = ['JavaScript | CSS | HTML', 'JavaScript | CSS | HTML', 'JavaScript | CSS | HTML | Api'];
  description = ['Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories',
    'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    'Based on the PokéAPI a simple library that provides and catalogues pokemon information.'];



  /**
   * show the correct github
   * 
   * @param i number
   */  
  showGithub(i: number) {
    if (i == 0) {
      window.open('https://github.com/Marco-Thiele/Join-Portfolio');
    }
    if (i == 1) {
      window.open('https://github.com/Marco-Thiele/El-Pollo-Locco');
    }
    if (i == 2) {
      window.open('https://github.com/Marco-Thiele/Pokedex');
    }
  }


  /**
   * show the correct live demo
   * 
   * @param i number
   */
  showApp(i: number){
    if (i == 0) {
      window.open('https://marco-thiele.com/Join-Portfolio/index.html');
    }
    if (i == 1) {
      window.open('https://marco-thiele.com/EL_PoLLo_Loco/index.html');
    }
    if (i == 2) {
      window.open('https://marco-thiele.com/Pokedex/index.html');
    }
  }
}
