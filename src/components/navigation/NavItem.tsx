import { Link } from "react-router";

const NavItem = ({
  path,
  label,
  status,
  currentPath,
}: {
  path: string;
  label: string;
  status: string;
  currentPath: string;
}) => {
  return (
    <div className={` mb-6`}>
      <Link to={path} className={`nav-item ${status}`}>
        <p
          className={`${
            currentPath === path ? "font-bold " : ""
          } text-foreground`}
        >
          {label}
        </p>
      </Link>
    </div>
  );
};

export default NavItem;
