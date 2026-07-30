import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { Output, EventEmitter } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { RouterModule } from '@angular/router';

import { Task } from '../../models/task';

@Component({

    selector: 'app-task-card',

    standalone: true,

    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        RouterModule
    ],

    templateUrl: './task-card.component.html',

    styleUrls: ['./task-card.component.css']

})

export class TaskCardComponent {

    @Input({ required: true })

    task!: Task;

@Output()
delete = new EventEmitter<number>();

@Output()
toggle = new EventEmitter<Task>();

toggleStatus(): void {
  this.toggle.emit(this.task);
}

deleteTask(): void {
  console.log('Clique em excluir', this.task.id);
  this.delete.emit(this.task.id);
}

}