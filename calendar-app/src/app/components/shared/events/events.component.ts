import {Component, Inject} from '@angular/core';
import {EventSingleComponent} from '../event-single/event-single.component';
import {tasksData} from '../../../core/Mocks/TasksData';
import {TasksModel} from '../../../core/interfaces/Tasks';
import {eventsService} from '../../../core/injection tokens/service-tokens';
import {IEventService} from '../../../core/interfaces/IEventService';
import {EventsService} from '../../../core/services/events.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    EventSingleComponent
  ],
  providers: [
    {
      provide: eventsService,
      useClass: EventsService
    }
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  events: TasksModel[] = [];

  constructor(@Inject(eventsService) private eventService: IEventService) { }

  ngOnInit(): void {
    this.eventService.getEvents().pipe().subscribe(events => this.events = events);
  }
}
