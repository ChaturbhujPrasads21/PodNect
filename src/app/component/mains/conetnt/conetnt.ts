import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';
import { Theams } from '../../../services/bark-ligththem/theams';
@Component({
  selector: 'app-conetnt',
  imports: [CommonModule],
  templateUrl: './conetnt.html',
  styleUrl: './conetnt.scss'
})
export class Conetnt  implements OnInit {
  constructor(public themeService:Theams) {}
  ngOnInit(): void {
    import('aos').then(AOS => {
    AOS.init();
  });
  }

}
