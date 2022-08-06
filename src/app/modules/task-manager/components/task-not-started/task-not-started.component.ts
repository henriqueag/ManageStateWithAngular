import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'task-not-started',
    templateUrl: './task-not-started.component.html'
})
export class TaskNotStartedComponent {

    @Input() tasksNotStarted: any[]

    @Output() nextStatus = new EventEmitter<any>()
    @Output() deleteTask = new EventEmitter<any>()

    onNextStatus(value: any) {
        this.nextStatus.emit(value)
    }

    onDeleteTask(value: any) {
        this.deleteTask.emit(value)
    }
}
