import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskManagerRoutingModule } from './task-manager-routing.module';
import { TaskManagerPageComponent } from './pages/task-manager-page/task-manager-page.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskNotStartedComponent } from './components/task-not-started/task-not-started.component';
import { TaskInProgressComponent } from './components/task-in-progress/task-in-progress.component';
import { TaskFinishedComponent } from './components/task-finished/task-finished.component';
import { FormsModule } from '@angular/forms';
import { TaskManagerBehavior } from './behavior/task-manager.behavior';
import { TaskManagerState } from './behavior/task-manager.state';


@NgModule({
    declarations: [
        TaskManagerPageComponent,
        TaskFormComponent,
        TaskNotStartedComponent,
        TaskInProgressComponent,
        TaskFinishedComponent
    ],
    imports: [
        CommonModule,
        TaskManagerRoutingModule,
        FormsModule
    ],
    exports: [
        TaskManagerPageComponent
    ],
    providers: [
        TaskManagerState,
        TaskManagerBehavior
    ]
})
export class TaskManagerModule { }
