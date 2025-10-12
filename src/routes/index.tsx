import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import RootLayout from "./__root";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

// 1. Create the root route
const rootRoute = createRootRoute({
  component: RootLayout,
});

// 2. Create main ("/") route for Login page
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Login,
});
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
});

// 3. Add more routes as needed:
// const dashboardRoute = createRoute({ getParentRoute: () => rootRoute, path: "/dashboard", component: Dashboard })

// 4. Build the route tree
const routeTree = rootRoute.addChildren([
  loginRoute,
  dashboardRoute,
]);

export const router = createRouter({ routeTree });
