// latest-insights.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface InsightCard {
  type: string;
  title: string;
  date: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-latest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latest.component.html',
  styleUrl: './latest.component.css'
})
export class LatestComponent {
  insights: InsightCard[] = [

    {
      type: 'Report',
      title: 'U.S. Cap Rate Survey H2 2024',
      date: 'February 12, 2025',
      image: 'img/latest1.png',
      description: 'CBRE cap rate report provides insights into commercial real estate trends and investor sentiment in H2 2024.'

    },
    {
      type: 'Book | Intelligent Investment',
      title: 'U.S. Life Sciences Outlook 2025',
      date: 'February 6, 2025',
      image: 'img/latest3.png',
      description: 'CBRE cap rate report provides insights into commercial real estate trends and investor sentiment in H2 2024.'

    },
    {
      type: 'Podcast | Future Cities',
      title: 'The Comeback: Opportunities abound ',
      date: 'February 18, 2025',
      image: 'img/latest2.png',
      description: 'CBRE cap rate report provides insights into commercial real estate trends and investor sentiment in H2 2024.'

    }
  ];
}