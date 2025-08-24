import React from "react";

const Pill = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color?: string;
}) => {
  const getColorClass = () => {
    switch (color) {
      case "red":
        return "#ff00009b";
      case "green":
        return "#22c55ea7";
      case "yellow":
        return "#ffbf00a9";
      default:
        return "#3b83f6c9";
    }
  };
  return (
    <div>
      <div
        className="text-white px-3 py-1 rounded-full text-xs inline-flex items-center justify-center "
        style={{ backgroundColor: getColorClass() }}
      >
        {children}
      </div>
    </div>
  );
};

export default Pill;
