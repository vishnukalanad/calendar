import {Component, Inject, InjectionToken} from '@angular/core';
import {DatePipe} from "@angular/common";
import {ICalendarService} from "../../core/interfaces/ICalendarService";
import {CalendarService} from "../../core/services/calendar.service";
import {NgxBootstrapIconsModule} from 'ngx-bootstrap-icons';
import {CalendarMiniComponent} from '../shared/calendar-mini/calendar-mini.component';
import {EventsComponent} from '../shared/events/events.component';
import {EventCreationFormComponent} from '../shared/event-creation-form/event-creation-form.component';
import {calendarService, eventsService} from '../../core/injection tokens/service-tokens';
import {EventsService} from '../../core/services/events.service';
import {IEventService} from '../../core/interfaces/IEventService';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgxBootstrapIconsModule,
    CalendarMiniComponent,
    EventsComponent,
    EventCreationFormComponent,
  ],
  providers: [
    {
      provide: calendarService,
      useClass: CalendarService
    },
    {
      provide: eventsService,
      useClass: EventsService
    }
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  showForm: boolean = true;

  constructor(@Inject(calendarService) private calendarService: ICalendarService, @Inject(eventsService) private eventService: IEventService,) {
  }

  ngOnInit(): void {
  }

  toggleForm(){
    this.showForm = !this.showForm;
  }

  onSubmit(e: any){
    console.log(e);
    // this.eventService.addEvent(event);
    this.toggleForm();
  }

}
