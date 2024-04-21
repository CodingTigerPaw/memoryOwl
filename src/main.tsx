import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.tsx";
import "./index.css";
import { store } from "./redux/store.tsx";
import { Provider } from "react-redux";
import RouterRoot from "./shared/components/RouterRoot.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home/Home.tsx";
import { NewMemory } from "./Pages/NewMemory/NewMemory.tsx";
import AllMemory from "./Pages/AllMemory/AllMemory.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterRoot />,

    children: [
      { path: "/", element: <Home /> },
      { path: "new/", element: <NewMemory /> },
      { path: "all/", element: <AllMemory /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
