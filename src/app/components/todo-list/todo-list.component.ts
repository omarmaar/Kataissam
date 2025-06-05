import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import type { TodoService } from "../../services/todo.service"
import { TodoItemComponent } from "../todo-item/todo-item.component"
import { SkeletonLoaderComponent } from "../skeleton-loader/skeleton-loader.component"

@Component({
  selector: "app-todo-list",
  standalone: true,
  imports: [CommonModule, FormsModule, TodoItemComponent, SkeletonLoaderComponent],
  template: `
    <div class="todo-container">
      <h2>Todo List</h2>
      
      <!-- Todo stats using computed signals -->
      <div class="todo-stats">
        <span>Total: {{ todoService.todos().length }}</span>
        <span>Active: {{ todoService.activeCount() }}</span>
        <span>Completed: {{ todoService.completedCount() }}</span>
      </div>
      
      <!-- New todo form -->
      <div class="add-todo-form">
        <input 
          type="text" 
          [(ngModel)]="newTodoTitle" 
          placeholder="Add a new todo..."
          (keyup.enter)="addTodo()"
        />
        <button (click)="addTodo()">Add</button>
      </div>
      
      <!-- Error message -->
      @if (todoService.error()) {
        <div class="error-message">
          {{ todoService.error() }}
        </div>
      }
      
      <!-- Loading state with skeleton loaders -->
      @if (todoService.loading()) {
        <div class="skeleton-container">
          @for (i of [1, 2, 3, 4, 5]; track i) {
            <app-skeleton-loader height="50px" class="skeleton-item"></app-skeleton-loader>
          }
        </div>
      } @else {
        <!-- Todo list -->
        @if (todoService.todos().length > 0) {
          <div class="todo-list">
            @for (todo of todoService.todos(); track todo.id) {
              <app-todo-item 
                [todo]="todo" 
                (toggle)="toggleTodo($event)" 
                (delete)="removeTodo($event)"
              ></app-todo-item>
            }
          </div>
        } @else {
          <p class="empty-state">No todos yet. Add one above!</p>
        }
      }
    </div>
  `,
  styles: [
    `
    .todo-container {
      max-width: 600px;
      margin: 0 auto;
    }
    
    .todo-stats {
      display: flex;
      gap: 16px;
      margin-bottom: 16px;
      color: #666;
    }
    
    .add-todo-form {
      display: flex;
      margin-bottom: 20px;
    }
    
    .add-todo-form input {
      flex: 1;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px 0 0 4px;
      font-size: 16px;
    }
    
    .add-todo-form button {
      padding: 10px 20px;
      background-color: #4285f4;
      color: white;
      border: none;
      border-radius: 0 4px 4px 0;
      cursor: pointer;
      font-size: 16px;
    }
    
    .error-message {
      color: #ff5252;
      padding: 10px;
      background-color: #ffeeee;
      border-radius: 4px;
      margin-bottom: 16px;
    }
    
    .skeleton-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    
    .empty-state {
      text-align: center;
      color: #888;
      padding: 20px;
    }
  `,
  ],
})
export class TodoListComponent implements OnInit {
  newTodoTitle = ""

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    // Fetch todos when component initializes
    this.todoService.fetchTodos()
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo(this.newTodoTitle)
      this.newTodoTitle = ""
    }
  }

  toggleTodo(id: number): void {
    this.todoService.toggleTodo(id)
  }

  removeTodo(id: number): void {
    this.todoService.removeTodo(id)
  }
}
