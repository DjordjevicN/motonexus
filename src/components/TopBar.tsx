import React from "react";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div>logo</div>
      <div>Search</div>
      <div>Profile</div>
    </div>
  );
};

export default React.memo(TopBar);
