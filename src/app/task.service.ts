import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';


@Injectable()
export class TaskService {

  constructor(
  private messageService: MessageService,
  private http: HttpClient
  ) { }

private tasksUrl = 'tasks'; // URL to the web api

getTasks():Observable<Task[]> {

 return this.http.get<Task[]>(this.tasksUrl)
    .pipe( tap(tasks => this.log('fetched tasks')),
      catchError(this.handleError('getTasks', []))
    );
}

update(task: Task): Observable<Task> {
return this.http.put<Task>(this.tasksUrl,task).pipe(
		tap(_ => this.log(`update task id=${task.id}`)),
      catchError(this.handleError<any>('update task'))
    );
}	

create(task: Task): Observable<Task> {
return this.http.post<Task>(this.tasksUrl,task).pipe(
		tap(newTask => this.log(`create task id=${newTask.id}`)),
      catchError(this.handleError<any>('create task'))
    );
}

delete( task: Task | number ): Observable<any>{
 const id = typeof task === 'number' ? task : task.id;
 const url = `${this.tasksUrl}/${id}`;
 return this.http.delete(url).pipe(
      tap(_ => this.log(`delete task id=${id}`)),
      catchError(this.handleError<any>(`deleteTask id=${id}`))
      );
}

/** GET task by id. Will 404 if id not found */
  getTask(id: number): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<Task>(url).pipe(
      tap(_ => this.log(`fetched task id=${id}`)),
      catchError(this.handleError<Task>(`getTask id=${id}`))
    );
  
}



    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
     
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
        
         // TODO: better job of transforming error for user consumption
    		this.log(`${operation} failed: ${error.message}`);
       
     
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
    
      private log(message: string) {
    this.messageService.add(`TaskService: ${message}`);
  }
}