import { TestBed } from "@angular/core/testing"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { TodoService } from "./todo.service"
import type { Todo } from "../models/todo.model"

describe("TodoService", () => {
  let service: TodoService
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodoService],
    })

    service = TestBed.inject(TodoService)
    httpMock = TestBed.inject(HttpTestingController)
  })

  afterEach(() => {
    httpMock.verify()
  })

  it("should be created", () => {
    expect(service).toBeTruthy()
  })

  it("should fetch todos from API", () => {
    const mockTodos: Todo[] = [
      { id: 1, title: "Test Todo 1", completed: false, userId: 1 },
      { id: 2, title: "Test Todo 2", completed: true, userId: 1 },
    ]

    service.fetchTodos()

    const req = httpMock.expectOne("https://jsonplaceholder.typicode.com/todos?_limit=10")
    expect(req.request.method).toBe("GET")
    req.flush(mockTodos)

    expect(service.todos()).toEqual(mockTodos)
    expect(service.loading()).toBeFalse()
  })

  it("should add a new todo", () => {
    service.addTodo("New Todo")

    const todos = service.todos()
    expect(todos.length).toBe(1)
    expect(todos[0].title).toBe("New Todo")
    expect(todos[0].completed).toBeFalse()
  })

  it("should toggle todo completion status", () => {
    service.addTodo("Test Todo")
    const todoId = service.todos()[0].id

    service.toggleTodo(todoId)
    expect(service.todos()[0].completed).toBeTrue()

    service.toggleTodo(todoId)
    expect(service.todos()[0].completed).toBeFalse()
  })

  it("should remove a todo", () => {
    service.addTodo("Test Todo")
    const todoId = service.todos()[0].id

    service.removeTodo(todoId)
    expect(service.todos().length).toBe(0)
  })

  it("should calculate completed count correctly", () => {
    service.addTodo("Todo 1")
    service.addTodo("Todo 2")
    service.addTodo("Todo 3")

    const todos = service.todos()
    service.toggleTodo(todos[0].id)
    service.toggleTodo(todos[2].id)

    expect(service.completedCount()).toBe(2)
    expect(service.activeCount()).toBe(1)
  })
})
