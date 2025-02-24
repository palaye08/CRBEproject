// ourtake.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ourtake',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ourtake.component.html',
  styleUrl: './ourtake.component.css'
})
export class OurtakeComponent {
  ourTakeContent = {
    title: 'Our Take Newsletter',
    subtitle: 'Expert perspectives on what matters most in commercial real estate',
    image: {
      src: 'img/iphone.png',
      alt: 'Newsletter on phone'
    }
  };
}