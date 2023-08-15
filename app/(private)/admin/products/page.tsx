"use client";

import { request } from "@/server/request";
import { useEffect, useState } from "react";
import { User } from '@/types';

export default function UsersP() {
  const [users, setUsers] = useState([] as User[]);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    async function getUsers() {
      try {
        let res = await request.get('user');
        setUsers(res.data);
      } catch (err) {
        console.log(err)
      }
    }
    getUsers();
  }, [])
  return (
    <main className="">
      {users.map(user => (<div key={user._id}>
        Firstname: {user.firstName}
      </div>))}
    </main>
  )
}