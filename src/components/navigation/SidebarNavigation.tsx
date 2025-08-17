import React from "react";
import NavItem from "./NavItem";
import { useLocation } from "react-router";

const SidebarNavigation = () => {
  const location = useLocation();
  const navRoutes = [
    {
      path: "/dashboard",
      label: "Dashboard",
      status: "active",
    },
    {
      path: "/profile",
      label: "Profile",
      status: "active",
    },
    {
      path: "/calendar",
      label: "Calendar",
      status: "inactive",
    },
    {
      path: "/events",
      label: "Events",
      status: "inactive",
    },
    {
      path: "/trips",
      label: "Trips",
      status: "inactive",
    },
  ];
  return (
    <div className="w-[320px] bg-card h-screen pl-6 flex flex-col justify-center">
      <nav className="">
        {navRoutes.map((route) => {
          return (
            <NavItem
              key={route.path}
              label={route.label}
              status={route.status}
              path={route.path}
              currentPath={location.pathname}
            />
          );
        })}
      </nav>
    </div>
  );
};

export default SidebarNavigation;
