import { Component, OnInit } from '@angular/core';
import { TaskManagerState } from '../../behavior/task-manager.state';
import { TaskManagerBehavior } from '../../behavior/task-manager.behavior';
import { Observable } from 'rxjs';

@Component({
    selector: 'task-manager-page',
    templateUrl: './task-manager-page.component.html',
    styleUrls: ['./task-manager-page.component.css']
})
export class TaskManagerPageComponent implements OnInit {

    tasksNotStarted$: Observable<any[]>
    tasksInProgress$: Observable<any[]>
    tasksFinished$: Observable<any[]>

    constructor(
        private _state: TaskManagerState,
        private _behavior: TaskManagerBehavior
    ) { }

    ngOnInit(): void {
        this.tasksNotStarted$ = this._state.getTasksNotStarted$()
        this.tasksInProgress$ = this._state.getTasksInProgress$()
        this.tasksFinished$ = this._state.getTasksFinished$()

        this._behavior.init()
    }

    onCreateTask(value: string) {
        this._behavior.addTask(value)
    }

    onDeleteTask(taskId: number) {
        this._behavior.deleteTask(taskId)
    }

    onAdvanceToInProgress(taskId: number) {
        this._behavior.advanceToInProgress(taskId)
    }

    onAdvanceToFinished(taskId: number) {
        this._behavior.advanceToFinished(taskId)
    }

    onBackToNotStarted(taskId: number) {
        this._behavior.backToNotStarted(taskId)
    }

    onBackToInProgress(taskId: number) {
        this._behavior.backToInProgress(taskId)
    }

}
