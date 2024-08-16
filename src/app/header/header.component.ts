import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user_name= "Mohsen Tayseer";
  user_job_profile = "Web Developer & Designer"
  
}
