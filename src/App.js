import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Logowanie from "./pages/AuthLoginForm";
import Oferta from "./pages/Oferta";
import ClientLayout from "./layouts/ClientLayout";
import AuthLoginForm from "./pages/AuthLoginForm";
import AuthRegistryForm from "./pages/AuthRegistryForm";
import Podsumowanie from "./pages/Podsumowanie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLoginForm/>
  },
  {
    path: "/oferta",
    element: <ClientLayout/>
  },
  {
    path: "/register",
    element: <AuthRegistryForm/>
  },
  {
    path: "/podsumowanie",
    element: <Podsumowanie/>
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
