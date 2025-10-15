import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import RootLayout from "./__root";
import Login from "../pages/Login";
import Dashboard from "@/pages/Dashboard";
import EmployeeMaster from "@/pages/EmployeeMaster";

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
const EmployeeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/employees",
  component: EmployeeMaster,
});

// 3. Add more routes as needed:
// const dashboardRoute = createRoute({ getParentRoute: () => rootRoute, path: "/dashboard", component: Dashboard })

// 4. Build the route tree
const routeTree = rootRoute.addChildren([
  loginRoute,
  dashboardRoute,
  EmployeeRoute,
]);

export const router = createRouter({ routeTree });
