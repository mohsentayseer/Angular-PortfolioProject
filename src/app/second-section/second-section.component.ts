import { Component } from '@angular/core';

@Component({
  selector: 'app-second-section',
  standalone: true,
  imports: [],
  templateUrl: './second-section.component.html',
  styleUrl: './second-section.component.css'
})
export class SecondSectionComponent {
  btn_text = 'Download Resume';
  downloadPDF(){
    const fileUrl = 'https://www.pdfdrive.com/download.pdf?id=10172273&h=84f0f3490acb0a861ce0cf97be914eed&u=cache&ext=pdf'; 
    

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileUrl; 

    // Append the link to the body

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the body
  }
}

