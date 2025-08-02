import { CommonModule } from '@angular/common';

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Splide from '@splidejs/splide'; @Component({
  selector: 'app-buttonmenu',
  imports: [CommonModule],
  templateUrl: './buttonmenu.html',
  styleUrl: './buttonmenu.scss'
})
export class Buttonmenu {
  Dashbord = true;
  Explore = false
  Matches = false;
  @ViewChild('splideTicker', { static: false }) splideTicker!: ElementRef;
  private splide!: Splide;

  ngAfterViewInit(): void {
    this.splide = new Splide(this.splideTicker.nativeElement, {
      type: 'loop',
      perPage: 5,
      arrows: false,
      pagination: false,
      gap: '1rem',
      breakpoints: {
        1024: { perPage: 3 },
        768: { perPage: 2 },
        480: { perPage: 1 },
      },
    }).mount(); // No AutoScroll mount
  }

  stopScrollAndLog(label: string) {
    console.log(`${label} clicked`);
  }
  Messages = false;
  Leaderboard = false;
  Profiles = false;
  Stats = false;
  toggledarsh() { this.Dashbord = true; this.Matches = false; this.Explore = false; this.Leaderboard = false; this.Messages = false; this.Profiles = false; this.Stats = false; }
  toggleMatches() { this.Matches = true; this.Dashbord = false; this.Explore = false; this.Leaderboard = false; this.Messages = false; this.Stats = false; this.Profiles = false; }
  toggleExplore() { this.Explore = true; this.Matches = false; this.Dashbord = false; this.Leaderboard = false; this.Messages = false; this.Stats = false; this.Profiles = false; }
  toggleMessages() { this.Messages = true; this.Matches = false; this.Dashbord = false; this.Explore = false; this.Leaderboard = false; this.Stats = false; this.Profiles = false; }
  toggleProfiles() { this.Profiles = true; this.Matches = false; this.Dashbord = false; this.Explore = false; this.Messages = false; this.Stats = false; this.Leaderboard = false; }
  toggleStats() { this.Stats = true; this.Matches = false; this.Dashbord = false; this.Explore = false; this.Messages = false; this.Profiles = false; this.Leaderboard = false; }
  toggleLeaderboard() { this.Leaderboard = true; this.Matches = false; this.Dashbord = false; this.Explore = false; this.Messages = false; this.Stats = false; this.Profiles = false; }
  toggleBookings() { this.stopScrollAndLog('Prior Bookings'); }
  toggleWorkflows() { this.stopScrollAndLog('Workflows'); }
  toggleWelcome() { this.stopScrollAndLog('Welcome'); }

}
