import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Task {
  name: string;
  done: boolean;
}

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css'],
})
export class TaskManagerComponent {

 
  taskForm!: FormGroup;

  Tasks: Task[] = [
    { name: 'Task1', done: false },
    { name: 'Task2', done: false },
    { name: 'Task3', done: false },
    { name: 'Task4', done: false },
  ];

  constructor(private fb: FormBuilder) {}
  isChecked:boolean= false
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.taskForm = this.fb.group({
      task: ['', Validators.required],
    });
  }
  AddTask() {
    this.Tasks.push({name:this.taskForm.get('task')?.value, done:false});
    this.taskForm.reset();
  }
  
  deleteTask(value: Task) {
    this.Tasks = this.Tasks.filter(t => t !== value);
  }
}
