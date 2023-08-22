import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  images = ['0.png', '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png'];
  imagesName = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'Firebase', 'Git', 'CSS', 'Rest-Api', 'Scrum', 'Material design'];


  scrollToSection(sectionId) {
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
