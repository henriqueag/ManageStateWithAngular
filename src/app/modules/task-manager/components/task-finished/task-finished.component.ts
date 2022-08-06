import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'task-finished',
  templateUrl: './task-finished.component.html'
})
export class TaskFinishedComponent {

    @Input() tasksFinished: any[]

    @Output() deleteTask = new EventEmitter<any>()
    @Output() previousStatus = new EventEmitter<any>()

    onPreviousStatus(value: any) {
        this.previousStatus.emit(value)
    }

    onDeleteTask(value: any) {
        this.deleteTask.emit(value)
    }

}
