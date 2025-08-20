import React from "react";
import placeholder from "../../assets/homepageBg.png";
const GroupCard = () => {
  return (
    <div className="border border-border rounded p-4 flex items-center gap-4 mb-4">
      <img src={placeholder} alt="" width={100} />
      <div>
        <p className="text-lg font-bold">Group Name</p>
        <p className="text-xs text-text">Active Events: 5</p>
        <p className="text-xs text-text">Members: 10</p>
      </div>
    </div>
  );
};

export default GroupCard;
