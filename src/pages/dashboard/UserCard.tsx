import React from "react";

const UserCard = ({
  displayName,
  email,
}: {
  displayName: string;
  email: string;
}) => {
  return (
    <div className="p-4 border-b border-gray-200">
      <h2 className="text-lg font-semibold">{displayName}</h2>
      <p className="text-sm text-gray-600">{email}</p>
    </div>
  );
};

export default UserCard;
