import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class TaskManagerState {
    private _tasksNotStarted$ = new BehaviorSubject<any[]>(null)
    private _tasksInProgress$ = new BehaviorSubject<any[]>(null)
    private _tasksFinished$ = new BehaviorSubject<any[]>(null)
    private _nextId$ = new BehaviorSubject<number>(0)

    getNextId() {
        return this._nextId$.getValue()
    }

    getNextId$() {
        return this._nextId$.asObservable()
    }

    setNextId(value: number) {
        this._nextId$.next(value)
    }

    getTasksNotStarted() {
        return this._tasksNotStarted$.getValue()
    }

    getTasksNotStarted$() {
        return this._tasksNotStarted$.asObservable()
    }

    setTasksNotStarted(value: any[]) {
        this._tasksNotStarted$.next(value)
    }

    getTasksInProgress() {
        return this._tasksInProgress$.getValue()
    }

    getTasksInProgress$() {
        return this._tasksInProgress$.asObservable()
    }

    setTasksInProgress(value: any[]) {
        this._tasksInProgress$.next(value)
    }

    getTasksFinished() {
        return this._tasksFinished$.getValue()
    }

    getTasksFinished$() {
        return this._tasksFinished$.asObservable()
    }

    setTasksFinished(value: any[]) {
        this._tasksFinished$.next(value)
    }
}
