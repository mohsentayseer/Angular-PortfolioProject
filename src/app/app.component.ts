import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SecondSectionComponent } from "./second-section/second-section.component";
import { SkillsComponent } from './skills/skills.component';
import { CardDisplayComponent } from './card-display/card-display.component';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,SecondSectionComponent,SkillsComponent,CardDisplayComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
