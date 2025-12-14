import {TasksModel} from './Tasks';
import {Observable} from 'rxjs';

export interface IEventService {
  getEvents(page: number, pageSize: number): Observable<TasksModel[]>;
  loadEvent(): void;
  addEvent(event: TasksModel): void;
}
