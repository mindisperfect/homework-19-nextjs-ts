"use client";

import { request } from "@/server/request";
import { useEffect, useState } from "react";

const UserAccount = () => {
  const [user, setUser] = useState([]);
  async function getUserData() {
    const res = await request("auth/me");
    const data = res.data;
    setUser(data);
  }
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className="container">
      <div className="account">
        {/* <div>{JSON.stringify(user)}</div> */}

        {user?.map(({ firstName, lastName }, i) => (
          <div className="contentssss" key={i}>
            <h1>{firstName}</h1>
            <h2>{lastName}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserAccount;
