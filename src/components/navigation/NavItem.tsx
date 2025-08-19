import { Link } from "react-router";
import { MdOutlineDashboard } from "react-icons/md";
import { GiRamProfile } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { GiPathDistance } from "react-icons/gi";
import { memo } from "react";

const NavItem = ({
  path,
  label,
  status,
  currentPath,
  handleCloseMenu,
}: {
  path: string;
  label: string;
  status: string;
  currentPath: string;
  handleCloseMenu?: () => void;
}) => {
  const iconSelector = (route: string) => {
    switch (route) {
      case "/":
        return <IoHomeOutline color="white" />;
      case "/dashboard":
        return <MdOutlineDashboard color="white" />;
      case "/profile":
        return <GiRamProfile color="white" />;
      case "/calendar":
        return <IoCalendarOutline color="white" />;
      case "/trips":
        return <GiPathDistance color="white" />;
      default:
        return <MdOutlineDashboard color="white" />;
    }
  };

  return (
    <div className={`mb-6`}>
      <Link to={status === "Soon" ? "#" : path} onClick={handleCloseMenu}>
        <div className="flex items-center gap-2">
          {iconSelector(path)}
          <p
            className={`${currentPath === path ? "font-bold " : ""} text-white`}
          >
            {label}
          </p>
          <p className="text-yellow-500 text-xs">{status}</p>
        </div>
      </Link>
    </div>
  );
};

export default memo(NavItem);
