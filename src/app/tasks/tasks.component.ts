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
        const beginToday: Date = new Date( );
        beginToday.setDate(today.getDate()+1);
        for (let task of this.tasks)
        { if ( task !== undefined &&  task.dueDate !== null){
            var tempDate = new Date(task.dueDate );
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
        const beginToday: Date = new Date( );
        beginToday.setDate(today.getDate()+1);
        const endWeek: Date = new Date(  );
        endWeek.setDate(today.getDate()+8);
        let tasklist = new Array<Task>();
			if (this.tasks!== undefined ){
        for (let task of this.tasks)
        {
        if ( task !== undefined &&  task.dueDate !== null){
            var tempDate = new Date(task.dueDate );
            if (tempDate > beginToday &&  tempDate< endWeek ) tasklist.push(task);
            }
        }
        console.log(tasklist);
        }
        return tasklist;
    }

   getLongTermTasks() : Array<Task>
    {
        const today: Date = new Date( Date.now() );
        const endWeek: Date = new Date(  );
        endWeek.setDate(today.getDate()+8);

        let tasklist = new Array<Task>();
			if (this.tasks!== undefined ){
        for (let task of this.tasks)
        {
        		if ( task !== undefined &&  task.dueDate !== null){
            	var tempDate = new Date(task.dueDate );
            }
            if (task.dueDate === null || tempDate > endWeek ) tasklist.push(task);
          
        }
        console.log(tasklist);
        }
        return tasklist;
    }

    getTodayEnding() : Date
    {
    const today: Date = new Date( Date.now() );
    const beginToday: Date = new Date( );
    beginToday.setDate(today.getDate()+1);
    removeTime(beginToday);
    return beginToday;

    }

    getWeekEnding() : Date
    {
    const today: Date = new Date( Date.now() );
    const beginToday: Date = new Date( );
    beginToday.setDate(today.getDate()+1);
    removeTime(beginToday);
    return beginToday;

    }

    removeTime(date : Date)
    {
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
    }
}
