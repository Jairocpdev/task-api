import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

import { TaskCardComponent } from '../../components/task-card/task-card.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { MatInputModule } from '@angular/material/input';

import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    TaskCardComponent,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

searchTerm = '';

get filteredTasks(): Task[] {

  if (!this.searchTerm.trim()) {
    return this.tasks;
  }

  return this.tasks.filter(task =>
    task.titulo
      .toLowerCase()
      .includes(this.searchTerm.toLowerCase())
  );

}

  tasks: Task[] = [];
  loading = true;

  constructor(
    private taskService: TaskService,
    private dialog: MatDialog,
    private searchService: SearchService
  ) {}

ngOnInit(): void {
  this.loadTasks();
  this.searchService.search$.subscribe(value => {
    this.searchTerm = value;
  });

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