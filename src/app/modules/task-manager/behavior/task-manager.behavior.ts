import { Injectable } from "@angular/core";
import { TaskManagerState } from "./task-manager.state";
import { getTasks } from '../models/task-data.model';

@Injectable()
export class TaskManagerBehavior {
    constructor(private _state: TaskManagerState) {
        this.nextId()
    }

    private _tasks: any[] = getTasks

    init() {
        this._state.setTasksNotStarted(this._tasks)
        this._state.setTasksInProgress([])
        this._state.setTasksFinished([])
    }

    addTask(value: string) {
        const tasks = this._state.getTasksNotStarted()
        const nextId = this._state.getNextId()

        const newTask = {
            taskId: nextId,
            title: value
        }

        tasks.push(newTask)

        this._state.setTasksNotStarted(tasks)
        this._state.setNextId(nextId + 1)
    }

    deleteTask(taskId: number) {
        this.deleteTaskNotStarted(taskId)
        this.deleteTaskInProgress(taskId)
        this.deleteTaskFinished(taskId)
    }

    advanceToInProgress(taskId: number) {
        const tasksStarted = this._state.getTasksNotStarted()
        const tasksInProgress = this._state.getTasksInProgress()

        const selectedTaskIndex = tasksStarted.findIndex(x => x.taskId == taskId)
        const selectedTask = tasksStarted.find(x => x.taskId == taskId)

        tasksStarted.splice(selectedTaskIndex, 1)
        tasksInProgress.push(selectedTask)
    }

    advanceToFinished(taskId: number) {
        const tasksInProgress = this._state.getTasksInProgress()
        const tasksFinished = this._state.getTasksFinished()

        const selectedTaskIndex = tasksInProgress.findIndex(x => x.taskId == taskId)
        const selectedTask = tasksInProgress.find(x => x.taskId == taskId)

        tasksInProgress.splice(selectedTaskIndex, 1)
        tasksFinished.push(selectedTask)
    }

    backToNotStarted(taskId: number) {
        const tasksInProgress = this._state.getTasksInProgress()
        const tasksStarted = this._state.getTasksNotStarted()

        const selectedTaskIndex = tasksInProgress.findIndex(x => x.taskId == taskId)
        const selectedTask = tasksInProgress.find(x => x.taskId == taskId)

        tasksInProgress.splice(selectedTaskIndex, 1)
        tasksStarted.push(selectedTask)
    }

    backToInProgress(taskId: number) {
        const tasksFinished = this._state.getTasksFinished()
        const tasksInProgress = this._state.getTasksInProgress()

        const selectedTaskIndex = tasksFinished.findIndex(x => x.taskId == taskId)
        const selectedTask = tasksFinished.find(x => x.taskId == taskId)

        tasksFinished.splice(selectedTaskIndex, 1)
        tasksInProgress.push(selectedTask)
    }

    private nextId() {
        this._tasks.length > 0 ? 0 : this._state.setNextId(1)

        this._tasks.forEach((element, index) => {
            if (index == this._tasks.length - 1) {
                this._state.setNextId(element.taskId + 1)
            }
        })
    }

    private deleteTaskNotStarted = (taskId: number) => {
        const tasksStarted = this._state.getTasksNotStarted()

        const index = tasksStarted.findIndex(x => x.taskId == taskId)

        if (index != -1) {
            tasksStarted.splice(index, 1)
            this._state.setTasksNotStarted(tasksStarted)
        }
    }

    private deleteTaskInProgress = (taskId: number) => {
        const tasksInProgress = this._state.getTasksInProgress()

        const index = tasksInProgress.findIndex(x => x.taskId == taskId)

        if (index != -1) {
            tasksInProgress.splice(index, 1)
            this._state.setTasksInProgress(tasksInProgress)
        }
    }

    private deleteTaskFinished = (taskId: number) => {
        const tasksFinished = this._state.getTasksFinished()

        const index = tasksFinished.findIndex(x => x.taskId == taskId)

        if (index != -1) {
            tasksFinished.splice(index, 1)
            this._state.setTasksFinished(tasksFinished)
        }
    }
}
