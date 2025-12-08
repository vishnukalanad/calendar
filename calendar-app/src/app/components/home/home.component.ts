import {Component, Inject, InjectionToken} from '@angular/core';
import {DatePipe} from "@angular/common";
import {ICalendarService} from "../../core/interfaces/ICalendarService";
import {CalendarService} from "../../core/services/calendar.service";
import {NgxBootstrapIconsModule} from 'ngx-bootstrap-icons';

const calendarService = new InjectionToken<ICalendarService>("CALENDAR_SERVICE");

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DatePipe,
    NgxBootstrapIconsModule,
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

  date = new Date();
  days: Date[] = [];
  prefixer: number[] = [];

  weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  constructor(@Inject(calendarService) private calendarService: ICalendarService) {
  }

  ngOnInit(): void {
    this.getDaysArray();
  }

  /**
   * Retrieves an array of days generated for a month using the calendar service and logs the days to the console.
   *
   * @return A subscription object that represents the observable returned by the calendar service.
   */
  getDaysArray() {
    console.log("Days generated;");
    this.calendarService.generateCalendarMonthDays(this.date).subscribe(days => {
      this.days = days;
      // console.log(this.days);
      this.prefixer = Array.from({length: this.days[0].getDay()}, (_, i) => i + 1);
    });
  }

  /**
   * Checks if the provided day matches the current day of the month.
   *
   * @return {boolean} Returns true if the provided day matches the current day of the month, otherwise false.
   * @param date
   */
  isCurrentMonth(date: Date): boolean {
    // console.log(this.date.getDate(), date.getDate());
    return this.date.toDateString() === date.toDateString()
  }

  /**
   * Updates the current date by setting it to the provided day while keeping the same month and year.
   *
   * @return {void} Does not return a value.
   * @param date
   */
  setCurrentDate(date: Date): void {
    this.date.setDate(date.getDate())
  }

  /**
   * Adjusts the current date by shifting it forward or backward by one month.
   *
   * @param {('forward' | 'backward')} type - Specifies the direction to shift the date. Use 'forward' to move one month ahead or 'backward' to move one month behind.
   * @return {void} This method does not return a value. It modifies the date property of the instance in place.
   */
  shiftDate(type: 'forward' | 'backward'): void {
    const d = this.date;
    this.date = new Date((type === 'forward' ? (d.setMonth(this.date.getMonth() + 1)) : (d.setMonth(this.date.getMonth() - 1))));

    // console.log(d, new Date(d.setMonth(this.date.getMonth() + 1)));
    this.getDaysArray();
  }

  alwaysActiveCurrentDate(date: Date): boolean {
    return this.date.toDateString() === date.toDateString();
  }
}
