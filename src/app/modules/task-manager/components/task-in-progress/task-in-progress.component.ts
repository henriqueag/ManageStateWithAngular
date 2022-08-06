import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'task-in-progress',
  templateUrl: './task-in-progress.component.html'
})
export class TaskInProgressComponent {

    @Input() tasksInProgress: any[]

    @Output() nextStatus = new EventEmitter<any>()
    @Output() deleteTask = new EventEmitter<any>()
    @Output() previousStatus = new EventEmitter<any>()

    onNextStatus(value: any) {
        this.nextStatus.emit(value)
    }

    onPreviousStatus(value: any) {
        this.previousStatus.emit(value)
    }

    onDeleteTask(value: any) {
        this.deleteTask.emit(value)
    }
}
