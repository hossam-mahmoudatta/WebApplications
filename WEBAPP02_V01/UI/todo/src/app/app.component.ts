import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './theme.service'; // Adjust the path as necessary

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = "Todo List";

  tasks: any = [];
  newtask: string = ""; // Initialize the newtask variable
  editingTaskID: string = ""; // Track the task being edited
  editedTaskValue: string = ""; // Track the edited task value
  
  // currentTaskID: string = ''; // Store the current task ID

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
    try {
      const response = await firstValueFrom(this.http.get(this.APIURL + "get_tasks"));
      this.tasks = (response as any[]).map(task => ({ 
        ...task, 
        isEditing: false,
        date_added: new Date(task.date_added), // Ensure it's a Date object
        last_modified: new Date(task.last_modified) // Ensure it's a Date object
      }));
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
  }

  // #################### Add Task Method ####################
  async add_task(task: string) {
    task = task.trim(); // Trim whitespace from the task string

    if (task.length === 0) {
      alert("Task cannot be empty.");
      return;
    }

    let body = new FormData();
    body.append('task', task);

    try {
      const response: any = await firstValueFrom(this.http.post(this.APIURL + "add_task", body));
      
      // Check if response contains tasks and if it's in the expected format
      if (response && response.tasks) {
        // Assuming the newly added task is the last in the response
        const newTask = response.tasks[response.tasks.length - 1];

        this.tasks.push({
            id: newTask.id, // Make sure this ID is available in the response
            task: newTask.task, // Use the task from the response
            date_added: new Date(), // Use the date from the response
            last_modified: new Date(), // Use the last modified date from the response
            isEditing: false
        });
        alert("Task added successfully!"); // Optional: Show success message
    } else {
        console.error("Unexpected response structure", response);
    }
    } catch (error) {
        console.error("Error adding task:", error);
    }
  }

  // #################### Edit Task Method ####################
  edit_task(task: any) {
    this.tasks.forEach((t: any) => t.isEditing = false); // Reset all tasks' edit mode
    task.isEditing = true; // Enable edit mode for the selected task
  }

  // #################### Cancel the Edit Process ####################
  cancel_edit(task: any) {
    task.isEditing = false; // Enable edit mode for the selected task
  }

  // #################### Saves changes to the edited task ####################
  save_edited_task() {
    this.add_task(this.editedTaskValue); // Reuse the add_task method to handle update logic
  }

  // #################### Update task ####################
  async update_task(task: any) {
    if (task.task.trim()) {
      let body = new FormData();
      body.append('id', task.id);
      body.append('task', task.task.trim());
  
      try {
        await firstValueFrom(this.http.post(this.APIURL + "update_task", body));
        task.isEditing = false; // Exit edit mode after update
        task.last_modified = new Date(); // Update the last modified date
        await this.get_tasks(); // Refresh the task list
      } catch (error) {
        console.error("Error updating the task:", error);
      }
    } else {
      alert("Task cannot be empty!");
    }
  }

  async delete_task(id: any) {
    let body = new FormData();
    body.append('id', id);

    try {
      await firstValueFrom(this.http.post(this.APIURL + "delete_task", body));
      await this.get_tasks();
    } catch(error) {
      console.error("Error deleting task:", error);
    }
  }
}
