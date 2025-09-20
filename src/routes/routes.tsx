import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateCardPage from "../pages/Flashcard/CreateCardPage";
import ShowCardPage from "../pages/Flashcard/ShowCardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateCardPage />,
  },
  {
    path: "/flashcard",
    element: <ShowCardPage />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
