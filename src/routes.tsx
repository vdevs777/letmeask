import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/rooms/new",
    element: <NewRoom />,
  },
  {
    path: "/rooms/:id",
    element: <Room />,
  },
  {
    path: "/admin/rooms/:id",
    element: <AdminRoom />,
  },
]);
