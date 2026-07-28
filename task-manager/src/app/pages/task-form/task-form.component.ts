import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { TaskService } from '../../services/task.service';
import { CreateTask } from '../../models/task';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent implements OnInit {

  private fb = inject(FormBuilder);
  private service = inject(TaskService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private snack = inject(MatSnackBar);

  editing = false;
  taskId = 0;

  form = this.fb.group({
    titulo: ['', Validators.required],
    descricao: [''],
    concluida: [false]
  });

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      return;
    }

    this.editing = true;
    this.taskId = Number(id);

    this.service.getTask(this.taskId).subscribe({

      next: (task) => {

        this.form.patchValue({
          titulo: task.titulo,
          descricao: task.descricao,
          concluida: task.concluida
        });

      },

      error: () => {

        this.snack.open(
          'Erro ao carregar a tarefa.',
          'Fechar',
          {
            duration: 3000
          }
        );

        this.router.navigate(['/']);

      }

    });

  }

  save(): void {

    if (this.form.invalid) {
      return;
    }



    const task: CreateTask = {
      titulo: this.form.value.titulo ?? '',
      descricao: this.form.value.descricao ?? '',
      concluida: this.form.value.concluida ?? false
    };

    const request = this.editing
      ? this.service.updateTask(this.taskId, task)
      : this.service.createTask(task);

    request.subscribe({

      next: () => {

        this.snack.open(
          this.editing
            ? 'Tarefa atualizada com sucesso!'
            : 'Tarefa criada com sucesso!',
          'OK',
          {
            duration: 3000
          }
        );

        this.router.navigate(['/']);

      },

      error: (err) => {

        console.error(err);

        this.snack.open(
          JSON.stringify(err.error),
          'Fechar',
          {
            duration: 5000
          }
        );

      }

    });

  }

}