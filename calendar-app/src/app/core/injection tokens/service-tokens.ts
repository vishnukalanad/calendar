import {InjectionToken} from '@angular/core';
import {ICalendarService} from '../interfaces/ICalendarService';
import {IEventService} from '../interfaces/IEventService';

export const calendarService = new InjectionToken<ICalendarService>("CALENDAR_SERVICE");
export const eventsService = new InjectionToken<IEventService>('EVENTS_SERVICE');
