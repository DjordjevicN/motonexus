import NavItem from "./NavItem";
import { useLocation } from "react-router";
import { navRoutes } from "./navRoutes";
import { IoMenuOutline } from "react-icons/io5";
import { useCallback, useState } from "react";

const SidebarNavigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = useCallback(() => {
    setIsOpen(false);
  }, []);
  return (
    <>
      <div className="min-w-[240px] w-[320px] bg-card h-screen pl-6 pt-4 hidden lg:block">
        <div className="flex gap-3 items-center">
          <h1 className="text-accent font-black text-2xl">MotoNexus</h1>
        </div>
        <nav className="mt-[30%]">
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

      <div className="fixed w-full top-0 lg:hidden">
        <IoMenuOutline
          color="white"
          size={24}
          className="fixed top-6 right-6"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <div className="flex justify-center items-center h-screen bg-card">
            <div>
              {navRoutes.map((route) => {
                return (
                  <NavItem
                    key={route.path}
                    label={route.label}
                    status={route.status}
                    path={route.path}
                    currentPath={location.pathname}
                    handleCloseMenu={handleCloseMenu}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SidebarNavigation;
