import React from "react";
import { useSelector } from "react-redux";

function UserList() {
  const { data: users, loading, error } = useSelector((state) => state.users);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {users.map((user) => (
        <li key={user.id} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <p className="text-sm/6 font-semibold text-gray-900">{user.name}</p>
            <p className="text-sm/6 font-semibold text-gray-900">
              {user.email}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default UserList;
