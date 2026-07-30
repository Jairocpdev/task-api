import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

import { TaskCardComponent } from '../../components/task-card/task-card.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    TaskCardComponent,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  tasks: Task[] = [];
  loading = true;

  constructor(
    private taskService: TaskService,
    private dialog: MatDialog
  ) {}

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

  deleteTask(id: number): void {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '360px',
      data: {
        title: 'Excluir tarefa',
        message: 'Deseja realmente excluir esta tarefa?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result !== true) {
        return;
      }

      this.taskService.deleteTask(id).subscribe({
        next: () => this.loadTasks()
      });

    });

  }

  // ESTE MÉTODO FICA FORA DO deleteTask()
  toggleStatus(task: Task): void {

    this.taskService.toggleStatus(task).subscribe({

      next: () => {
        this.loadTasks();
      },

      error: () => {
        console.error('Erro ao alterar status.');
      }

    });

  }

}