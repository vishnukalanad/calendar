import {Component} from '@angular/core';
import {DatePipe} from "@angular/common";

/**
 * Enum representing different types of grids that can be used in a grid-based system.
 *
 * The `GridType` enumeration provides the following options:
 * - `DATE`: Represents a grid based on days.
 * - `MONTH`: Represents a grid based on months.
 * - `YEAR`: Represents a grid based on years.
 */
enum GridType {
  DATE = "DATE", MONTH = "MONTH", YEAR = "YEAR"
}

@Component({
  selector: 'app-calendar-mini',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './calendar-mini.component.html',
  styleUrl: './calendar-mini.component.css'
})

export class CalendarMiniComponent {
  dateRef: Date = new Date();
  selectedDate: Date = new Date();
  currentDate: Date = new Date();
  days: Date[] = [];
  prefixer: number[] = [];

  gridType: GridType = GridType.DATE;
  calendarGrids = GridType;

  weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  /**
   * An array containing the abbreviated names of the months in a year.
   * The `months` array is dynamically created to include the short form (3-letter abbreviation)
   * of the 12 months in a calendar year, using January (index 0) through December (index 11).
   * The locale used for the formatting is 'en-US'.
   */
  months = Array.from({
    length: 12
  }, (_, i) => {
    return new Intl.DateTimeFormat('en-US', {month: 'short'}).format(new Date(2021, i, 1));
  });


  ngOnInit(): void {
    this.getDaysArray();
  }


  /**
   * Generates and logs an array of days for the calendar month based on the provided date reference.
   * Updates the `days` property with the calendar days and creates a prefix array to align the calendar's first day.
   * @return {void} Does not return any value.
   */
  getDaysArray(): void {
    console.log("Days generated;");
    this.days = this.generateCalendarMonthDays(this.dateRef);
    this.prefixer = Array.from({length: this.days[0].getDay()}, (_, i) => i + 1);
  }

  /**
   * Checks if the provided day matches the current day of the month.
   * @return {boolean} Returns true if the provided day matches the current day of the month, otherwise false.
   * @param date
   */
  isCurrentDate(date: Date): boolean {
    // console.log(this.dateRef.toDateString(), ":", dateRef.toDateString())
    return this.selectedDate.toDateString() === date.toDateString();
  }

  /**
   * Sets the current date to the specified date value.
   * @param {Date} date The date to set as the current date.
   * @return {void} Does not return a value.
   */
  setCurrentDate(date: Date): void {
    this.selectedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    console.log("Selected dateRef : ", this.selectedDate)
  }

  /**
   * Adjusts the current dateRef by shifting it forward or backward by one month.
   * @param {('forward' | 'backward')} type - Specifies the direction to shift the dateRef. Use 'forward' to move one month ahead or 'backward' to move one month behind.
   * @return {void} This method does not return a value. It modifies the dateRef property of the instance in place.
   */
  shiftDate(type: 'forward' | 'backward'): void {
    const d = this.dateRef;
    if (this.gridType === this.calendarGrids.DATE) {
      this.dateRef = new Date((type === 'forward' ? (d.setMonth(this.dateRef.getMonth() + 1)) : (d.setMonth(this.dateRef.getMonth() - 1))));
    } else if (this.gridType === this.calendarGrids.MONTH) {
      this.dateRef = new Date((type === 'forward' ? (d.setFullYear(this.dateRef.getFullYear() + 1)) : (d.setFullYear(this.dateRef.getFullYear() - 1))));
    } else if (this.gridType === this.calendarGrids.YEAR) {
    }
    console.log(
      "Date changed to : ",
      this.dateRef
    )
    this.getDaysArray();
  }

  /**
   * Compares the provided dateRef with the current active dateRef to determine if they represent the same calendar dateRef.
   * @param {Date} date - The dateRef to compare with the current active dateRef.
   * @return {boolean} Returns true if the provided dateRef is the same as the current active dateRef, otherwise false.
   */
  alwaysActiveCurrentDate(date: Date): boolean {
    return this.currentDate.toDateString() === date.toDateString();
  }

  /**
   * Toggles the grid type by setting the provided grid type.
   * @param {GridType} type - The new grid type to be set.
   * @return {void} This method does not return a value.
   */
  toggleGridType(type: GridType): void {
    this.gridType = type;
  }

  /**
   * Sets the month of the dateRef and updates the calendar grid.
   * @param {number} month - The month to set, where 0 represents January and 11 represents December.
   * @return {void} Does not return a value.
   */
  setMonth(month: number): void {
    this.dateRef = new Date(this.dateRef.getFullYear(), month, 1);
    this.getDaysArray();
    this.toggleGridType(this.calendarGrids.DATE);
  }

  /**
   * Generates an array of Date objects representing all days in the month of the provided date.
   *
   * @param {Date} date - The date object from which the month and year are determined.
   * @return {Date[]} An array of Date objects, each representing a day in the specified month.
   */
  generateCalendarMonthDays(date: Date): Date[] {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    return Array.from({length: daysInMonth}, (_, i) =>
      new Date(year, month, i + 1)
    );
  }

  /**
   * Generates a random alphanumeric string ID.
   * Combines two sequences of random characters derived from `Math.random`.
   * @return {string} A randomly generated alphanumeric string.
   */
  generateRandomId(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
}
