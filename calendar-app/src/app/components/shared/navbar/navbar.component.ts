import {Component, OnDestroy} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnDestroy{
  today: Date = new Date();
  private animationFrameId: number | null  = null;
  private lastUpdate = 0

  ngOnInit(): void {
    this.startClock();
  }

  ngOnDestroy(): void {
    if(this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
  }

  startClock() {
    const update = (timestamp: number) => {
      if(timestamp - this.lastUpdate >= 1000) {
        this.today = new Date();
        this.lastUpdate = timestamp;
      }

      this.animationFrameId = requestAnimationFrame(update);
    }

    this.animationFrameId = requestAnimationFrame(update);
  }
}
