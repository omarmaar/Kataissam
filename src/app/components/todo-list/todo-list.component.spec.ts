import { type ComponentFixture, TestBed } from "@angular/core/testing"
import { TodoListComponent } from "./todo-list.component"
import { TodoService } from "../../services/todo.service"
import { FormsModule } from "@angular/forms"
import { HttpClientTestingModule } from "@angular/common/http/testing"
import { SkeletonLoaderComponent } from "../skeleton-loader/skeleton-loader.component"
import { TodoItemComponent } from "../todo-item/todo-item.component"
import { jest } from "@jest/globals" // Import jest to declare the variable

describe("TodoListComponent", () => {
  let component: TodoListComponent
  let fixture: ComponentFixture<TodoListComponent>
  let todoService: TodoService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule, TodoListComponent, TodoItemComponent, SkeletonLoaderComponent],
      providers: [TodoService],
    }).compileComponents()

    fixture = TestBed.createComponent(TodoListComponent)
    component = fixture.componentInstance
    todoService = TestBed.inject(TodoService)

    // Spy on the fetchTodos method to prevent actual HTTP requests
    jest.spyOn(todoService, "fetchTodos").mockImplementation(() => {})

    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })

  it("should call fetchTodos on init", () => {
    expect(todoService.fetchTodos).toHaveBeenCalled()
  })

  it("should add a new todo when form is submitted", () => {
    const addTodoSpy = jest.spyOn(todoService, "addTodo")
    component.newTodoTitle = "New Test Todo"
    component.addTodo()

    expect(addTodoSpy).toHaveBeenCalledWith("New Test Todo")
    expect(component.newTodoTitle).toBe("")
  })

  it("should not add empty todos", () => {
    const addTodoSpy = jest.spyOn(todoService, "addTodo")
    component.newTodoTitle = "   "
    component.addTodo()

    expect(addTodoSpy).not.toHaveBeenCalled()
  })

  it("should toggle a todo", () => {
    const toggleTodoSpy = jest.spyOn(todoService, "toggleTodo")
    component.toggleTodo(1)

    expect(toggleTodoSpy).toHaveBeenCalledWith(1)
  })

  it("should remove a todo", () => {
    const removeTodoSpy = jest.spyOn(todoService, "removeTodo")
    component.removeTodo(1)

    expect(removeTodoSpy).toHaveBeenCalledWith(1)
  })
})
