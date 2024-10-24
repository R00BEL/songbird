import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./components/layouts/AppLayout";
import { Home } from "@songbird/pages/Home";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

const App = () => {
  return <RouterProvider router={router} />;
};

App.displayName = "App";

export default App;
