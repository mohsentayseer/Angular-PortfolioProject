import { Component } from '@angular/core';

@Component({
  selector: 'app-card-display',
  standalone: true,
  imports: [],
  templateUrl: './card-display.component.html',
  styleUrl: './card-display.component.css'
})
export class CardDisplayComponent {
  card1_text :string = "Web Design"
  card2_text :string = "Mobile Design"
  card3_text :string = "Logo Design"
  card4_text :string = "Web Application Development"
  card5_text :string = "Mobile Application Development"
  card6_text :string = "PWA Development"

}
