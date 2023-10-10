import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { registerSW } from "virtual:pwa-register";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import MovieDetails from "./components/MovieDetails";
import Home from "./components/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

const updateSW = registerSW({
  onendedRefresh() {
    const userConfirmed = window.confirm(
      "A new version is available. Do you want to refresh the page?"
    );
    if (userConfirmed) {
      updateSW();
    }
  },
  onofflineReady() {
    window.alert("You are now ready to work offline. Click OK to continue.");
  },
});
