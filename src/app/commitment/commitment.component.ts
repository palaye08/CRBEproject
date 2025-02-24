// commitment.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CommitmentCard {
  title: string;
  content: string;
}

@Component({
  selector: 'app-commitment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './commitment.component.html',
  styleUrl: './commitment.component.css'
})
export class CommitmentComponent {
  commitments: CommitmentCard[] = [
    {
      title: "Our Story",
      content: "We bring the diverse knowledge of our people, clients, and partners to realize potential in every business and every person."
    },
    {
      title: "Corporate Responsibility",
      content: "We take great pride in our reputation for upholding the highest standards in the way we do business."
    },
    {
      title: "Sustainability",
      content: "Accelerating sustainability by decarbonizing our own operations and influencing the way buildings are built, sourced, managed, occupied and sold."
    },
    {
      title: "Diversity, Equity & Inclusion",
      content: "At CBRE, we take our leadership role in the real estate industry to heart. So we've made responsible practices the foundation of our global operations."
    }
  ];
}



