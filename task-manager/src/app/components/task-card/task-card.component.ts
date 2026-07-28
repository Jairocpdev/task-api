import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

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

}