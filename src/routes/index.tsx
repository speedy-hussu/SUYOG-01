import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import RootLayout from "./__root";
import Login from "../pages/Login";
import Dashboard from "@/pages/Dashboard";
import EmployeeMaster from "@/pages/Employee/EmployeeMaster";
import CustomerMaster from "@/pages/Customer/CustomerMaster";
import VendorMaster from "@/pages/Vendor/VendorMaster";
import IngredientMaster from "@/pages/Ingredients/IngredientMaster";

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
const CustomerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/customers",
  component: CustomerMaster,
});
const VendorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/vendors",
  component: VendorMaster,
});
const IngredientRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ingredients",
  component: IngredientMaster,
});

// 3. Add more routes as needed:
// const dashboardRoute = createRoute({ getParentRoute: () => rootRoute, path: "/dashboard", component: Dashboard })

// 4. Build the route tree
const routeTree = rootRoute.addChildren([
  loginRoute,
  dashboardRoute,
  EmployeeRoute,
  IngredientRoute,
  CustomerRoute,
  VendorRoute,
]);

export const router = createRouter({ routeTree });
