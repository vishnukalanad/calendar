import {Observable} from "rxjs";

export interface ICalendarService {
  getCalendarMonthDays(year: number, month: number): Observable<number>;
  generateCalendarMonthDays(month: Date): Observable<Date[]>;
}
