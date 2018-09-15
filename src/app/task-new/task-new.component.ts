import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { Location } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
	task: Task = {title: "title", done:false};
 constructor(
  private location: Location,
  private taskService: TaskService) { }

  ngOnInit() {
  }
  

	create(): void {
	this.taskService.create(this.task).subscribe();
  this.goBack();
	}

	goBack(): void {
  this.location.back();
}

}