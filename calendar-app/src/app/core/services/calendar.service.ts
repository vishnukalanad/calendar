import {Injectable} from '@angular/core';
import {ICalendarService} from "../interfaces/ICalendarService";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CalendarService implements ICalendarService {

  constructor() {
  }

  /**
   * Retrieves the number of days in a specified month of a given year.
   *
   * @param {number} y - The year for which to calculate the number of days.
   * @param {number} m - The month (0-based, where 0 is January and 11 is December) for which to calculate the number of days.
   * @return {Observable<number>} An observable emitting the number of days in the specified month.
   */
  getCalendarMonthDays(y: number, m: number): Observable<number> {
    const d = new Date(y, m + 1, 0).getDate();
    return of(d);
  }

  /**
   * Generates an observable that emits an array of days for the given month.
   * @param {Date} date - The date.
   * @return {Observable<number[]>} An observable emitting an array containing the days of the month, starting from 1 up to the specified number of days.
   */
  generateCalendarMonthDays(date: Date): Observable<Date[]> {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days: Date[] = Array.from({length: daysInMonth}, (_, i) =>
      new Date(year, month, i + 1)
    );

    return of(days);
  }

}
