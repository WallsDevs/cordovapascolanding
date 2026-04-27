import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./components/Home";
import { Nosotros } from "./components/Nosotros";
import Servicios from "./components/Servicios";
import { Sectores } from "./components/Sectores";
import { Contacto } from "./components/Contacto";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "nosotros", Component: Nosotros },
      { path: "servicios", Component: Servicios },
      { path: "sectores", Component: Sectores },
      { path: "contacto", Component: Contacto },
    ],
  },
]);
