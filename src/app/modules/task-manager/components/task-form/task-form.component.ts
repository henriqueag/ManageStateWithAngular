import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'task-form',
    templateUrl: './task-form.component.html'
})
export class TaskFormComponent {

    @ViewChild('taskTitleInput', { static: true }) titleInput: ElementRef

    @Output() createTask = new EventEmitter<any>()

    taskTitle: string

    onCreateTask() {
        this.createTask.emit(this.taskTitle)
        this.taskTitle = ''
    }

    onSelectAll() {
        this.titleInput.nativeElement.select()
    }
}
