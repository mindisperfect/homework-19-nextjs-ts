"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

import logo from "@/components/images/logo.jpg";
import logoShopping from "@/components/images/shopping-logo.jpg";
import Image from "next/image";
import { UploadOutlined } from "@ant-design/icons";

const Header = () => {
  const { isAuth, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  return (
        <div className="container">
    <header className="flex text-[white] gap-3 bc-nav">
        <div>
          <Image src={logo} alt="logo" height={50} width={50} style={{ marginRight: "20px", borderRadius: "4px", marginLeft: "20px" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link style={{ fontSize: "20px", marginRight: "10px" }} href="/"> Home </Link>
          <Link style={{ fontSize: "20px", marginRight: "10px" }} href="/about"></Link>
          <Link style={{ fontSize: "20px", marginRight: "10px" }} href="/products"> Products </Link>
          <Link style={{ fontSize: "20px", marginRight: "10px" }} href="/contact" > Contact Us </Link>
          <Link style={{ fontSize: "20px", marginRight: "10px" }} href="/cart"> Cart </Link>
          <Link style={{ fontSize: "20px", marginRight: "10px" }} href="/login">Login</Link>
          {isAuth ? (
        <Fragment>
          <Link style={{ fontSize: "20px", marginRight: "10px" }} href="/account">Account | {user?.firstName} </Link>
          <button style={{backgroundColor: "red",  marginRight: "10px"}} onClick={() => dispatch(logout(router))}><UploadOutlined /></button>
        </Fragment>
      ) : null}
          <Image
            src={logoShopping}
            style={{ marginRight: "20px", borderRadius: "4px" }}
            alt="logo"
            height={50}
            width={50}
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
