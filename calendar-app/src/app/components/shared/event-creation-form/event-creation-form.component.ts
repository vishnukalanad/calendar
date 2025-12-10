import {Component, output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-event-creation-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './event-creation-form.component.html',
  styleUrl: './event-creation-form.component.css',
})
export class EventCreationFormComponent {

  onCancel = output();
  submit = output();

  today: Date = new Date();

  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    date: new FormControl(this.today, [Validators.required]),
    type: new FormControl('', [Validators.required]),
    assignee: new FormControl(''),
    location: new FormControl(''),
    priority: new FormControl(''),
    project: new FormControl('')
  });
  constructor() { }

  cancel(){
    this.onCancel.emit();
  }

  onSubmit(){
    this.submit.emit(this.form.value);
  }
}
