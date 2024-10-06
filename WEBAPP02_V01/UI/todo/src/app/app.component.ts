import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './theme.service'; // Adjust the path as necessary

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'todo';

  tasks: any = [];
  newtask: string = ''; // Initialize the newtask variable
  // currentTaskID: string = ''; // Store the current task ID
  editingTaskID: string = ''; // Store the current task ID

  APIURL = "http://localhost:8000/"

  constructor(private http: HttpClient, private themeService: ThemeService) { }

  ngOnInit() {
    this.get_tasks();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  // #################### Get Task Method ####################
  async get_tasks() {
    this.http.get(this.APIURL + "get_tasks").subscribe((res) => {
      this.tasks = res;
    })
  }

  // #################### Add Task Method ####################
  async add_task(task: string) {
    let body = new FormData();
    body.append('task', task);

    if (this.editingTaskID) {
      body.append('id', this.editingTaskID);
      try {
        this.http.post(this.APIURL + "update_task", body).subscribe((res: any) => {
          alert(res.message);
          this.get_tasks();
          this.editingTaskID = ""; // Push the new task to the tasks array
          this.newtask = "";
        })
      } catch (error) {
          console.error("Error updating task:", error);
      }
    } else {
      try {
        this.http.post(this.APIURL + "add_task", body).subscribe((res: any) => {
          alert(res.message);
          this.get_tasks();
          this.newtask = "";
          this.tasks.push(res); // Push the new task to the tasks array
        })
      } catch (error) {
          console.error("Error adding task:", error);
      }
    }
  }

  edit_task(task: any) {
    this.editingTaskID = task.id; // Store the current task ID
    task.isEditing = true; // Set the task to edit
  }

  update_task(task: any) {
    this.add_task(task.task); // Set the task to edit
    task.isEditing = false; // Reset the editing flag
  }

  async delete_task(id: any) {
    let body = new FormData();
    body.append('id', id);

    try {
      this.http.post(this.APIURL + "delete_task", body).subscribe((res: any) => {
        alert(res.message);
        this.get_tasks();
      })
    } catch(error) {
      console.error("Error deleting task:", error);
    }
  }
}
