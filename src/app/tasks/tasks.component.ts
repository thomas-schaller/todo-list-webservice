import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {Task} from '../task';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
@Injectable()
export class TasksComponent implements OnInit {

	tasks: Task [];
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  this.getTasks();
  
  }


getTasks():void {
	this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
}

changeState( task: Task)
{
task.done = !task.done;
this.taskService.update(task).subscribe();
}

add(task: Task)
{
	this.tasks.push(task);
}

delete(task: Task):void {
this.tasks = this.tasks.filter(t => t !== task);
this.taskService.delete(task).subscribe();
}
}
