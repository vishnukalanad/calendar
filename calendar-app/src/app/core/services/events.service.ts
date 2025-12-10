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
   * Retrieves a list of events.
   *
   * @return {Observable<TasksModel[]>} An observable emitting an array of tasks model instances.
   */
  getEvents(): Observable<TasksModel[]> {
    return of(this.events);
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
