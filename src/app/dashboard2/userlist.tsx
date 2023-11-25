"use client";
import React, { useEffect } from "react";
import { useApiUserStore } from "@/store/api";

const UserList = () => {
  const users = useApiUserStore((state) => state.users);
  const isLoading = useApiUserStore((state) => state.isLoading);
  const fetchUsers = useApiUserStore((state) => state.fetchUsers);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return (
    <div>
      {!isLoading ? (
        <div>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default UserList;
