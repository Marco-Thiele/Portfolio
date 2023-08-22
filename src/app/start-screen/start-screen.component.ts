import { Component } from '@angular/core';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent {

  scrollToSection(sectionId: string): void{
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      const offset = -150;
      const targetPosition = targetSection.offsetTop + offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

}
