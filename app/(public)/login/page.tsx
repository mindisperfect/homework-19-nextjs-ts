"use client";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import { login } from "@/redux/slices/authSlice";
import { useState } from "react";
import { request } from "@/server/request";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e) => { 
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      let { data } = await request.post("auth/login", user);
      setUser(data)
    } catch (err) {
      console.log(err);
    }
  };

  const loginUser = async () => {
    let user = { username: "abdulaziz", password: "1234567" };
    dispatch(login({ user, router }));
  };

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 48,
      }}
      spin
    />
  );
  return (
    <div className="text-center">
      <h1 className="title" style={{ fontSize: "40px" }}>
        Login
      </h1>
      <form className="inputs" onSubmit={submit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="username"
          className="inputsss"
          name="username"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="password"
          className="inputsss"
          name="password"
        />
      </form>
      <button
        className="button"
        type="submit"
        onClick={loginUser}
        disabled={loading}
      >
        {loading ? (
          <Spin
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "50px",
              marginTop: "50px",
            }}
            indicator={antIcon}
          />
        ) : (
          "Login"
        )}
      </button>
    </div>
  );
};

export default Login;
