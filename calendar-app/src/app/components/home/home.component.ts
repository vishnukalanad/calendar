import {Component, Inject, InjectionToken} from '@angular/core';
import {DatePipe} from "@angular/common";
import {ICalendarService} from "../../core/interfaces/ICalendarService";
import {CalendarService} from "../../core/services/calendar.service";
import {NgxBootstrapIconsModule} from 'ngx-bootstrap-icons';
import {CalendarMiniComponent} from '../shared/calendar-mini/calendar-mini.component';
import {EventsComponent} from '../shared/events/events.component';

const calendarService = new InjectionToken<ICalendarService>("CALENDAR_SERVICE");

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgxBootstrapIconsModule,
    CalendarMiniComponent,
    EventsComponent,
  ],
  providers: [
    {
      provide: calendarService,
      useClass: CalendarService
    }
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(@Inject(calendarService) private calendarService: ICalendarService) {
  }

  ngOnInit(): void {
  }

}
