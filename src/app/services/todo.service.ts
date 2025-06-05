import { Injectable, signal, inject } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { computed } from "@angular/core"
import type { Todo } from "../models/todo.model"

@Injectable({
  providedIn: "root",
})
export class TodoService {
  private http = inject(HttpClient)

  // Using signals for state management
  private todosSignal = signal<Todo[]>([])
  private loadingSignal = signal<boolean>(false)
  private errorSignal = signal<string | null>(null)

  // Computed values derived from signals
  public todos = this.todosSignal.asReadonly()
  public loading = this.loadingSignal.asReadonly()
  public error = this.errorSignal.asReadonly()

  // Computed property for completed todos count
  public completedCount = computed(() => {
    return this.todosSignal().filter((todo) => todo.completed).length
  })

  // Computed property for active todos count
  public activeCount = computed(() => {
    return this.todosSignal().filter((todo) => !todo.completed).length
  })

  /**
   * Fetch todos from API
   */
  fetchTodos(): void {
    this.loadingSignal.set(true)
    this.errorSignal.set(null)

    this.http.get<Todo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10").subscribe({
      next: (todos) => {
        this.todosSignal.set(todos)
        this.loadingSignal.set(false)
      },
      error: (err) => {
        console.error("Error fetching todos", err)
        this.errorSignal.set("Failed to load todos")
        this.loadingSignal.set(false)
      },
    })
  }

  /**
   * Add a new todo
   */
  addTodo(title: string): void {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
      userId: 1,
    }

    this.todosSignal.update((todos) => [...todos, newTodo])
  }

  /**
   * Toggle todo completion status
   */
  toggleTodo(id: number): void {
    this.todosSignal.update((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    )
  }

  /**
   * Remove a todo
   */
  removeTodo(id: number): void {
    this.todosSignal.update((todos) => todos.filter((todo) => todo.id !== id))
  }
}
