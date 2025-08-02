import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import {MatIconModule} from '@angular/material/icon';
import { Theams } from '../../../services/bark-ligththem/theams';
@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './skill.html',
  styleUrl: './skill.scss',
})
export class Skill implements AfterViewInit {
  constructor(public themeService:Theams) {}
  @ViewChild('splideTicker') splideTicker!: ElementRef;

  features = [
    { icon: '/Image/sl1.png', name: 'logoipsum' },
    { icon: '/Image/sl2.png', name: 'logoipsum' },
     { icon: '/Image/sl1.png', name: 'logoipsum' },
    { icon: '/Image/sl2.png', name: 'logoipsum' },
     { icon: '/Image/sl1.png', name: 'logoipsum' },
    { icon: '/Image/sl2.png', name: 'logoipsum' },
     { icon: '/Image/sl1.png', name: 'logoipsum' },
    { icon: '/Image/sl2.png', name: 'logoipsum' },

    // Add more as needed
  ];

  ngAfterViewInit() {
    new Splide(this.splideTicker.nativeElement, {
      type: 'loop',
      perPage: 3,
      perMove: 1,
      arrows: false,
      pagination: false,
      autoplay: true,
      interval: 4000,
      pauseOnHover: true,
      breakpoints: {
        1024: { perPage: 2 },
        768: { perPage: 1 },
      },
      autoScroll: {
        speed: 1.5,
        pauseOnHover: true,
      },
      extensions: { AutoScroll }, // ✅ Required for mount
    }).mount({ AutoScroll });
  }
}
