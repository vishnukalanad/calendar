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
  page = 1;
  pageSize = 5;

  constructor(@Inject(eventsService) private eventService: IEventService) { }

  ngOnInit(): void {
    this.loadData(this.page);
  }

  loadData(page: number): void {
    console.log("Loading data for page : ", page);
    this.eventService.getEvents(page, this.pageSize).subscribe(events => events.forEach(event => this.events.push(event)));
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
