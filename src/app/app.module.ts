import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { HttpClientModule } from "@angular/common/http"
import { RouterModule } from "@angular/router"

import { AppComponent } from "./app.component"
import { HomeComponent } from "./pages/home/home.component"
import { AboutComponent } from "./pages/about/about.component"
import { TodoListComponent } from "./components/todo-list/todo-list.component"
import { TodoItemComponent } from "./components/todo-item/todo-item.component"
import { SkeletonLoaderComponent } from "./components/skeleton-loader/skeleton-loader.component"
import { NavbarComponent } from "./components/navbar/navbar.component"
import { APP_ROUTES } from "./app.routes"

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    AppComponent,
    HomeComponent,
    AboutComponent,
    TodoListComponent,
    TodoItemComponent,
    SkeletonLoaderComponent,
    NavbarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
