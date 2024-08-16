import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  htmlPercentage = 90;
  cssPercentage = 80;
  javascriptPercentage = 85;
  reactPercentage = 75;
  photoshopPercentage = 70;
  adobeXdPercentage = 60;
  nodeJsPercentage = 65;
  wordpressPercentage = 50;
}
