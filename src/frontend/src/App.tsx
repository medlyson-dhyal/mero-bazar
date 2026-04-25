import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { SkeletonCard } from "./components/ui/SkeletonCard";

const HomePage = lazy(() => import("./pages/Home"));
const CategoriesPage = lazy(() => import("./pages/Categories"));
const SearchPage = lazy(() => import("./pages/Search"));
const CartPage = lazy(() => import("./pages/Cart"));
const AccountPage = lazy(() => import("./pages/Account"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetail"));
const CategoryProductsPage = lazy(() => import("./pages/CategoryProducts"));
const OrdersPage = lazy(() => import("./pages/Orders"));
const OrderDetailPage = lazy(() => import("./pages/OrderDetail"));

function PageLoader() {
  return (
    <div className="p-4 grid grid-cols-2 gap-3">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <Outlet />
    </Suspense>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
const categoriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/categories",
  component: CategoriesPage,
});
const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/search",
  component: SearchPage,
});
const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cart",
  component: CartPage,
});
const accountRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/account",
  component: AccountPage,
});
const productDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/product/$id",
  component: ProductDetailPage,
});
const categoryProductsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/category/$name",
  component: CategoryProductsPage,
});
const ordersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/orders",
  component: OrdersPage,
});
const orderDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/order/$id",
  component: OrderDetailPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  categoriesRoute,
  searchRoute,
  cartRoute,
  accountRoute,
  productDetailRoute,
  categoryProductsRoute,
  ordersRoute,
  orderDetailRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
