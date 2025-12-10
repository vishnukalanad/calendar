import { Component } from '@angular/core';
import {EventSingleComponent} from '../event-single/event-single.component';
import {tasksData} from '../../../core/Mocks/TasksData';
import {TasksModel} from '../../../core/interfaces/Tasks';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    EventSingleComponent
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  events: TasksModel[] = tasksData;
}
