import {Injectable} from '@angular/core';
import {IEventService} from '../interfaces/IEventService';
import {TasksModel} from '../interfaces/Tasks';
import {tasksData} from '../Mocks/TasksData';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsService implements IEventService {
  private events: TasksModel[] = [];

  constructor() {
    this.loadEvent();
  }


  /**
   * Retrieves a paginated list of events.
   *
   * @param {number} page - The current page number.
   * @param {number} pageSize - The number of events per page.
   * @return {Observable<TasksModel[]>} An observable containing the list of events for the specified page.
   */
  getEvents(page: number, pageSize: number): Observable<TasksModel[]> {
    const start = (page - 1) + pageSize;
    const end = start + pageSize;
    const paginated = this.events.slice(start, end);

    return of(paginated);
  }

  /**
   * Loads the event data by assigning the pre-defined tasks data to the events property.
   *
   * @return {void} Does not return any value.
   */
  loadEvent(): void {
    this.events = tasksData;
  }

  /**
   * Adds a new event to the events list.
   *
   * @param {TasksModel} event - The event to be added to the events list.
   * @return {void} This method does not return a value.
   */
  addEvent(event: TasksModel): void {
    this.events.push(event);
  }
}
