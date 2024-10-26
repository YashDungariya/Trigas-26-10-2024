import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DashBoard from "./pages/DashBoard";
import LoginPage from "./pages/LoginPage";
import CustomerPage from "./pages/CustomerPage";
import CustomerTablePage from "./pages/CustomerTablePage ";
import CustomerDetails from "./components/Table/CustomerDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/dashboard",
      element: <DashBoard />,
    },
    {
      path: "/customer",
      element: <CustomerPage />,
    },
    {
      path: `/customer/edit/:id`,
      element: <CustomerPage />,
    },
    {
      path: "/customertable",
      element: <CustomerTablePage />,
    },
    {
      path: "/customer/view/:id",
      element: <CustomerDetails />,
    },
    {
      path: "*",
      element: <h1>Page Not Found</h1>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
