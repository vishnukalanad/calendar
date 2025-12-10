import {Component, input, InputSignal, Signal} from '@angular/core';
import {TasksModel} from '../../../core/interfaces/Tasks';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-event-single',
  imports: [DatePipe],
  templateUrl: './event-single.component.html',
  styleUrl: './event-single.component.css',
})
export class EventSingleComponent {
  event: InputSignal<TasksModel> = input.required();
}
