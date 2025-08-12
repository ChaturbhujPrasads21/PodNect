import { CommonModule } from '@angular/common';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // ✅ IMPORT HERE
import * as AOS from 'aos';
import { Theams } from '../../../services/bark-ligththem/theams';

@Component({
  selector: 'app-conetnt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conetnt.html',
  styleUrl: './conetnt.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // ✅ ALLOW WEB COMPONENTS
})
export class Conetnt implements OnInit {
  constructor(public themeService: Theams) {}

  ngOnInit(): void {
    import('aos').then(AOS => {
      AOS.init();
    });
  }
}
