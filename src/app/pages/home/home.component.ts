import { Component } from "@angular/core"
import { TodoListComponent } from "../../components/todo-list/todo-list.component"

@Component({
  selector: "app-home",
  standalone: true,
  imports: [TodoListComponent],
  template: `
    <div class="home-container">
      <header>
        <h1>Angular 19 Signals Demo</h1>
        <p>A modern todo application built with Angular 19 and the Signals API</p>
      </header>
      
      <app-todo-list></app-todo-list>
    </div>
  `,
  styles: [
    `
    .home-container {
      padding: 20px 0;
    }
    
    header {
      text-align: center;
      margin-bottom: 40px;
    }
    
    h1 {
      margin-bottom: 10px;
      color: #4285f4;
    }
    
    p {
      color: #666;
    }
  `,
  ],
})
export class HomeComponent {}
