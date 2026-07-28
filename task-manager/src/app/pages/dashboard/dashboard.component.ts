import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

import { TaskCardComponent } from '../../components/task-card/task-card.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    TaskCardComponent,
    MatProgressSpinnerModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  tasks: Task[] = [];

  loading = true;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {

    this.loading = true;

    this.taskService.getTasks().subscribe({

      next: (tasks) => {

        this.tasks = tasks;

        this.loading = false;

      },

      error: () => {

        this.loading = false;

      }

    });

  }

  get totalTasks(): number {

    return this.tasks.length;

  }

  get completedTasks(): number {

    return this.tasks.filter(task => task.concluida).length;

  }

  get pendingTasks(): number {

    return this.tasks.filter(task => !task.concluida).length;

  }
}