import { Component } from "@angular/core"

@Component({
  selector: "app-about",
  standalone: true,
  template: `
    <div class="about-container">
      <h1>About This Project</h1>
      
      <section>
        <h2>Angular 19 Kata</h2>
        <p>
          This project serves as a code kata (exercise) for learning modern Angular 19 features,
          particularly focusing on the new Signals API for state management.
        </p>
      </section>
      
      <section>
        <h2>Features Demonstrated</h2>
        <ul>
          <li><strong>Signals API:</strong> Modern reactive state management</li>
          <li><strong>Standalone Components:</strong> Self-contained, reusable components</li>
          <li><strong>Skeleton Loaders:</strong> Improved UX during data loading</li>
          <li><strong>Lazy Loading:</strong> Code splitting for better performance</li>
          <li><strong>Control Flow:</strong> Using @if and @for syntax</li>
        </ul>
      </section>
      
      <section>
        <h2>Project Structure</h2>
        <pre>
src/
├── app/
│   ├── components/       # Reusable UI components
│   ├── models/           # TypeScript interfaces
│   ├── pages/            # Route components
│   ├── services/         # Data and state services
│   ├── app.component.ts  # Root component
│   ├── app.module.ts     # Root module
│   └── app.routes.ts     # Application routes
└── main.ts              # Application entry point
        </pre>
      </section>
    </div>
  `,
  styles: [
    `
    .about-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    
    h1 {
      color: #4285f4;
      margin-bottom: 30px;
    }
    
    section {
      margin-bottom: 30px;
    }
    
    h2 {
      color: #5f6368;
      margin-bottom: 15px;
      border-bottom: 1px solid #eee;
      padding-bottom: 10px;
    }
    
    ul {
      line-height: 1.6;
    }
    
    pre {
      background-color: #f5f5f5;
      padding: 15px;
      border-radius: 4px;
      overflow-x: auto;
    }
  `,
  ],
})
export class AboutComponent {}
