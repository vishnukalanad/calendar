import {TasksModel} from './Tasks';
import {Observable} from 'rxjs';

export interface IEventService {
  getEvents(): Observable<TasksModel[]>;
  loadEvent(): void;
  addEvent(event: TasksModel): void;
}
