import MainNavigation from "./MainNavigation.jsx";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <main>{<Outlet></Outlet>}</main>
    </div>
  );
};

export default RootLayout;
