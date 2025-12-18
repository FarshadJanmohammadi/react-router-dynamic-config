import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductsPage from "./pages/products";
import ProductPage from "./pages/products/product";
import LoginPage from "./pages/auth/login";
import ForgetPasswordPage from "./pages/auth/forgetPassword";
import AuthLayout from "./layout/authLayout";
import HomeLayout from "./layout/homeLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsPage from "./pages/posts";
import PostDetails from "./pages/posts/postId";
import NotFound404 from "./components/notFound404";
import DashboardPage from "./pages/dashboard";
import MarketPage from "./pages/dashboard/market";
import NotFound404Dashboard from "./components/notFound404Dashboard";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "/products",
        children: [
          {
            index: true,
            Component: ProductsPage,
          },
          {
            path: ":productId",
            Component: ProductPage,
          },
        ],
      },
      {
        path: "/posts",
        children: [
          {
            index: true,
            Component: PostsPage,
          },
          {
            path: ":postId",
            Component: PostDetails,
          },
        ],
      },
    ],
  },

  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "forget-password",
        Component: ForgetPasswordPage,
      },
    ],
  },

  {
    path: "/dashboard",
    children: [
      {
        index: true,
        Component: DashboardPage,
      },
      {
        path: "market",
        Component: MarketPage,
      },

      {
        path: "*",
        Component: NotFound404Dashboard,
      },
    ],
  },

  {
    path: "/*",
    Component: NotFound404,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
