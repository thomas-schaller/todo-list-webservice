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

   getTodayTasks() : Array<Task>
    {
        const today: Date = new Date( Date.now() );
        let tasklist = new Array<Task>();
        if (this.tasks!== undefined ){
        const beginToday: Date = new Date( today.getDate(),today.getMonth(),today.getFullYear() );
        for (let task of this.tasks)
        { if ( task !== undefined &&  task.dueDate !== null){
            var tempDate = new Date(task.dueDate.getDate(),task.dueDate.getMonth(),task.dueDate.getFullYear() );
            if (tempDate <= beginToday ) tasklist.push(task);
            }
        }
        console.log(tasklist);
        }
        return tasklist;
    }

   getWeekTasks() : Array<Task>
    {
        const today: Date = new Date( Date.now() );
        const beginToday: Date = new Date( today.getDate(),today.getMonth(),today.getFullYear() );
        const endWeek: Date = new Date( today.getTime()+7,today.getMonth(),today.getFullYear() );

        let tasklist = new Array<Task>();

        for (let task of this.tasks)
        {
        var tempDate = new Date(task.dueDate.getDate(),task.dueDate.getMonth(),task.dueDate.getFullYear() );
            if (tempDate > beginToday &&  tempDate< endWeek ) tasklist.push(task);
        }
        console.log(tasklist);
        return tasklist;
    }

   getLongTermTasks() : Array<Task>
    {
        const today: Date = new Date( Date.now() );
        const endWeek: Date = new Date( today.getTime()+7,today.getMonth(),today.getFullYear() );

        let tasklist = new Array<Task>();

        for (let task of this.tasks)
        {
        var tempDate = new Date(task.dueDate.getDate(),task.dueDate.getMonth(),task.dueDate.getFullYear() );
            if (task.dueDate === null || tempDate > endWeek ) tasklist.push(task);
        }
        console.log(tasklist);
        return tasklist;
    }
}
