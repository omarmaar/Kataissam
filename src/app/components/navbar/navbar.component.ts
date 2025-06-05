import { Component } from "@angular/core"
import { RouterLink, RouterLinkActive } from "@angular/router"

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="brand">Angular 19 Kata</div>
      <ul class="nav-links">
        <li>
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
        </li>
        <li>
          <a routerLink="/about" routerLinkActive="active">About</a>
        </li>
        <li>
          <a routerLink="/profile" routerLinkActive="active">Profile (Lazy)</a>
        </li>
      </ul>
    </nav>
  `,
  styles: [
    `
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 24px;
      background-color: #4285f4;
      color: white;
    }
    
    .brand {
      font-size: 20px;
      font-weight: bold;
    }
    
    .nav-links {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 20px;
    }
    
    .nav-links a {
      color: white;
      text-decoration: none;
      padding: 8px 12px;
      border-radius: 4px;
      transition: background-color 0.2s;
    }
    
    .nav-links a:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    
    .nav-links a.active {
      background-color: rgba(255, 255, 255, 0.2);
      font-weight: bold;
    }
  `,
  ],
})
export class NavbarComponent {}
