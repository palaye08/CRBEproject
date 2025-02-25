import { Component, OnInit, OnDestroy, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LearnComponent } from '../learn/learn.component';
import { OurtakeComponent } from '../ourtake/ourtake.component';
import { LatestComponent } from '../latest/latest.component';
import { CommitmentComponent } from '../commitment/commitment.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    LearnComponent,
    OurtakeComponent,
    LatestComponent,
    CommitmentComponent
  ],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit, OnDestroy {
  @ViewChild('mainHeader') mainHeader!: ElementRef;
  
  imagesPath: string[] = [
    'img/imgtech.png',
    'img/img2.png',
    'img/imgbatimat.png',
    'img/img2.png',
    'img/techJaune.png'
  ];
  
  footerTexts: string[] = [
    'Discover More About Ellis AI',
    'Read Our Market Analysis',
    'Learn About Sustainability',
    'View Our Strategy',
    'Explore Opportunities'
  ];
  
  texts: string[] = [
    'Ellis AI Digital Assistants',
    'Us Market Outlook 2025',
    'Accelerete Sustainability',
    'Climate Transition Strategy',
    'Where Potential Become Real'
  ];
  
  // Menu state
  isMenuOpen = false;
  activeDropdown: string | null = null;
  isDropdownOpen = false;
  
  // Toggle mobile menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  // Dropdown management
  showDropdown(dropdownName: string) {
    this.activeDropdown = dropdownName;
    this.isDropdownOpen = true;
  }
  
  hideDropdown(dropdownName: string) {
    if (this.activeDropdown === dropdownName) {
      this.activeDropdown = null;
      this.isDropdownOpen = false;
    }
  }
  
  // Add click outside handler to close menu
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger-btn');
    
    if (this.isMenuOpen && menu && hamburger) {
      const clickedElement = event.target as HTMLElement;
      if (!menu.contains(clickedElement) && !hamburger.contains(clickedElement)) {
        this.isMenuOpen = false;
      }
    }
  }
  
  currentImageIndex: number = 0;
  private intervalId: any;
  
  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.startImageSlider();
    }
  }
  
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  
  private startImageSlider() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imagesPath.length;
    }, 3000);
  }
  
  setCurrentImage(index: number) {
    this.currentImageIndex = index;
  }
}