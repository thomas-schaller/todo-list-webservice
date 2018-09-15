import { Task } from '../task';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})

export class TaskDetailComponent implements OnInit {
@Input() task: Task;

  constructor(
  private route: ActivatedRoute,
  private taskService: TaskService,
  private location: Location) { }

  ngOnInit() {
  	this.getTask();
  }
  
  getTask(): void {
	const id = +this.route.snapshot.paramMap.get('id');
	this.taskService.getTask(id).subscribe(task => this.task = task);  
  }

	save(): void {
	this.taskService.update(this.task).subscribe();
  this.goBack();
	}
  goBack(): void {
  this.location.back();
}
}
