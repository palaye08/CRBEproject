// footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterLink {
  text: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  mainLinks: FooterLink[] = [
    { text: "About CBRE", url: "#" },
    { text: "Careers", url: "#" },
    { text: "Corporate Responsibility", url: "#" },
    { text: "Investor Relations", url: "#" },
    { text: "Newsroom", url: "#" },

  ];

  bottomLinks: FooterLink[] = [
    { text: "Contact Us", url: "#" },
    { text: "Global Privacy and Cookie Notice", url: "#" },
    { text: "Terms of Use", url: "#" },
    { text: "Our Response to Schrems II", url: "#" },
    { text: "California Privacy Notice", url: "#" },
    { text: "New York Disclosure Notices", url: "#" },
    { text: "CBRE Intranet", url: "#" },
    { text: "Cookie Settings", url: "#" }

  ];
}
