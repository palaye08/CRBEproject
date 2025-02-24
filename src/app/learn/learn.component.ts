// learn.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.css'
})
export class LearnComponent {
  headerText = {
    title: 'We are the global leader in commercial real estate services and investments.',
    subtitle: 'With services, insights and data that span every dimension of the industry, we create solutions for clients of every size, in every sector and across every geography.'
  };

  sections = [
    {
      title: 'What We Do',
      category: 'Insights & Research',
      heading: 'Deliver market knowledge and global insights',
      description: 'Our 500 global researchers offer actionable intelligence and a multi-dimensional perspective that is unparalleled in the industry.',
      link: 'Explore Insights & Research'
    },
    {
      title: 'Create the real estate solutions of tomorrow',
      category: 'Services',
      services: [
        'Invest in real estate',
  
        'Plan, lease & occupy',
        'Design & build',
        'Manage properties & portfolios',
        'Transform business outcomes'
      ],
      link: 'Explore Services'
    }
  ];
}