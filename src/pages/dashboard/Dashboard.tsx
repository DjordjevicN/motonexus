import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import UserCard from "./UserCard";
import { IUser } from "../../types/userTypes";
import { useState } from "react";

interface UsersResponse {
  data: IUser[];
  totalPages: number;
}
const Dashboard = () => {
  const [page, setPage] = useState(1);
  const limit = 10;

  const fetcher = async ({ queryKey }: any) => {
    const [_key, page] = queryKey;
    const res = await axios.get<UsersResponse>(
      `http://localhost:4000/users?page=${page}&limit=${limit}`
    );
    return res.data;
  };

  const { data } = useQuery<UsersResponse>({
    queryKey: ["users", page],
    queryFn: fetcher,
    placeholderData: keepPreviousData,
  });

  return (
    <div className="w-full">
      <div>overview</div>
      <div className="flex justify-between">
        <div className="max-w-[400px] bg-amber-100 w-full">my groups</div>
        <div className="w-full bg-amber-400">
          {data?.data.map((user: IUser) => {
            return (
              <UserCard
                key={user.email}
                displayName={user.displayName}
                email={user.email}
              />
            );
          })}

          <div className="flex justify-center gap-2 mt-4">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              Prev
            </button>
            <span className="px-3 py-1">{page}</span>
            <button
              onClick={() =>
                setPage((prev) =>
                  prev < (data?.totalPages ?? 1) ? prev + 1 : prev
                )
              }
              disabled={page === data?.totalPages}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
