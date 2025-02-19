import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit, OnDestroy {
  imagesPath: string[] = [
    'img/imgtech.png',
    'img/img2.png',
    'img/imgbatimat.png',
    'img/img2.png',
    'img/imgclimat.png'
  ];

  currentImageIndex: number = 0;
  private intervalId: any;

  ngOnInit() {
    // Démarrer le slider seulement côté client
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