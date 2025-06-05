import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import { NavbarComponent } from "./components/navbar/navbar.component"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  template: `
    <div class="app-container">
      <app-navbar></app-navbar>
      <main class="content">
        <router-outlet></router-outlet>
      </main>
      <footer class="footer">
        <p>Angular 19 Kata Project - Built with Signals API</p>
      </footer>
    </div>
  `,
  styles: [
    `
    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    .content {
      flex: 1;
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }
    .footer {
      padding: 20px;
      text-align: center;
      background-color: #f5f5f5;
      border-top: 1px solid #e0e0e0;
    }
  `,
  ],
})
export class AppComponent {
  title = "angular-kata"
}
