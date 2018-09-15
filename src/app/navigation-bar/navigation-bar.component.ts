import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { TasksComponent } from '../tasks/tasks.component'

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
	
constructor(
  private taskService: TaskService) { }

  ngOnInit() {
  }

	create(titleTask: string): void {
	var task : Task= {title: titleTask, done:false};
	this.taskService.create(task).subscribe();
	}
}



