import { Component, Input, Output, EventEmitter } from "@angular/core"
import { CommonModule } from "@angular/common"
import type { Todo } from "../../models/todo.model"

@Component({
  selector: "app-todo-item",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="todo-item" [class.completed]="todo.completed">
      <div class="todo-content">
        <input 
          type="checkbox" 
          [checked]="todo.completed"
          (change)="onToggle()"
          aria-label="Mark as completed"
        />
        <span class="todo-title">{{ todo.title }}</span>
      </div>
      <button 
        class="delete-btn" 
        (click)="onDelete()"
        aria-label="Delete todo"
      >
        ✕
      </button>
    </div>
  `,
  styles: [
    `
    .todo-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      background-color: white;
      border-radius: 4px;
      margin-bottom: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    
    .todo-content {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .completed .todo-title {
      text-decoration: line-through;
      color: #888;
    }
    
    .delete-btn {
      background: none;
      border: none;
      color: #ff5252;
      cursor: pointer;
      font-size: 16px;
      padding: 4px 8px;
      border-radius: 4px;
    }
    
    .delete-btn:hover {
      background-color: #ffeeee;
    }
  `,
  ],
})
export class TodoItemComponent {
  /**
   * The todo item to display
   */
  @Input({ required: true }) todo!: Todo

  /**
   * Event emitted when the todo is toggled
   */
  @Output() toggle = new EventEmitter<number>()

  /**
   * Event emitted when the todo is deleted
   */
  @Output() delete = new EventEmitter<number>()

  /**
   * Handle toggle event
   */
  onToggle(): void {
    this.toggle.emit(this.todo.id)
  }

  /**
   * Handle delete event
   */
  onDelete(): void {
    this.delete.emit(this.todo.id)
  }
}
