import type { Routes } from "@angular/router"
import { HomeComponent } from "./pages/home/home.component"
import { AboutComponent } from "./pages/about/about.component"

export const APP_ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  // Example of lazy loading
  {
    path: "profile",
    loadComponent: () => import("./pages/profile/profile.component").then((m) => m.ProfileComponent),
  },
  { path: "**", redirectTo: "" },
]
