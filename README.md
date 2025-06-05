# Angular 19 Kata Project

A modern Angular 19 application demonstrating best practices and the latest features, perfect for learning and reference.

![Angular 19 Kata](https://angular.io/assets/images/logos/angular/angular.svg)

## Features

- **Angular 19**: Built with the latest version of Angular
- **Signals API**: Modern reactive state management
- **Standalone Components**: Self-contained, reusable components
- **Skeleton Loaders**: Improved UX during data loading
- **Lazy Loading**: Code splitting for better performance
- **Control Flow**: Using @if and @for syntax
- **Unit Testing**: Complete test setup with Jest
- **Code Quality**: ESLint and Prettier configuration
- **Vercel Ready**: Optimized for deployment on Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/angular-kata.git
   cd angular-kata
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm start
   \`\`\`

4. Open your browser and navigate to `http://localhost:4200`

## Project Structure

\`\`\`
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
\`\`\`

## Key Concepts Demonstrated

### Signals API

The Signals API is Angular's modern approach to reactive state management. This project demonstrates:

- Creating and using signals with `signal()`
- Read-only signals with `asReadonly()`
- Computed values with `computed()`
- Updating signal values with `set()` and `update()`

Example from `todo.service.ts`:

\`\`\`typescript
// Using signals for state management
private todosSignal = signal<Todo[]>([]);
private loadingSignal = signal<boolean>(false);

// Computed values derived from signals
public completedCount = computed(() => {
  return this.todosSignal().filter(todo => todo.completed).length;
});

// Updating signal values
addTodo(title: string): void {
  this.todosSignal.update(todos => [...todos, newTodo]);
}
\`\`\`

### Skeleton Loaders

Skeleton loaders improve user experience by showing a placeholder while data is loading:

\`\`\`typescript
@if (todoService.loading()) {
  <div class="skeleton-container">
    @for (i of [1, 2, 3, 4, 5]; track i) {
      <app-skeleton-loader height="50px" class="skeleton-item"></app-skeleton-loader>
    }
  </div>
} @else {
  <!-- Content here -->
}
\`\`\`

### Lazy Loading

Code splitting improves initial load time by only loading components when needed:

\`\`\`typescript
{ 
  path: 'profile', 
  loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent) 
}
\`\`\`

## Testing

Run the test suite with:

\`\`\`bash
npm test
\`\`\`

This project uses Jest for unit testing. Example test:

\`\`\`typescript
it('should add a new todo', () => {
  service.addTodo('New Todo');
  
  const todos = service.todos();
  expect(todos.length).toBe(1);
  expect(todos[0].title).toBe('New Todo');
  expect(todos[0].completed).toBeFalse();
});
\`\`\`

## Code Quality

- **ESLint**: Run `npm run lint` to check for code quality issues
- **Prettier**: Run `npm run format` to format code according to project standards

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Deploy!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Angular Team for the amazing framework
- The open source community for inspiration and support
