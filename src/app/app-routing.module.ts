import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { TaskNewComponent} from './task-new/task-new.component';
import { TaskDetailComponent }  from './task-detail/task-detail.component';

	const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
		{ path: 'tasks', component: TasksComponent }	,
		{ path: 'dashboard', component: DashboardComponent },
		{ path: 'new', component: TaskNewComponent },
		{ path: 'detail/:id', component: TaskDetailComponent }
		
	];
	
@NgModule({
imports: [ RouterModule.forRoot(routes) ],
 exports: [ RouterModule ]
})
export class AppRoutingModule { 


}

