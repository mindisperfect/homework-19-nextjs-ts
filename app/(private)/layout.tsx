// "use client"

// import Image from 'next/image';
// import { LayoutType } from '../..//types';
// import { useRouter } from 'next/navigation';
// import { Fragment, useEffect,  } from "react";
// import { useSelector } from 'react-redux';
// import Link from 'next/link';
// import { useAppDispatch } from '@/redux/hooks';
// import { UploadOutlined } from '@ant-design/icons';
// import logo from "@/components/images/logo.jpg";
// import logoShopping from "@/components/images/shopping-logo.jpg";
// import { logout } from '@/redux/slices/authSlice';
// import Footer from '@/components/footer';

// export default function PrivateLayout({ children }: LayoutType) {
//   const { user, isAuth} = useSelector(state => state.auth);
//   useEffect(() => {
//     if (!(user?.role && isAuth)) {
//       router.push('/login');
//     }
//   })
//   console.log(user, isAuth);

//   const dispatch = useAppDispatch();
//   const router = useRouter();
//   return (
//     <Fragment>
//       <div className="container">
//     <header className="flex text-[white] gap-3 bc-nav">
//         <div>
//           <Image src={logo} alt="logo" height={50} width={50} style={{ marginRight: "20px", borderRadius: "4px", marginLeft: "20px" }} />
//         </div>
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <Link style={{ fontSize: "20px", marginRight: "10px" }} href="/"> Admin </Link>
//           <Link style={{ fontSize: "20px", marginRight: "10px" }} href="/categories">Categories</Link>
//           <Link style={{ fontSize: "20px", marginRight: "10px" }} href="/users"> Products </Link>
//           {isAuth ? (
//         <Fragment>
//           <Link style={{ fontSize: "20px", marginRight: "10px" }} href="/account">Account | {user?.firstName} </Link>
//           <button style={{backgroundColor: "red",  marginRight: "10px"}} onClick={() => dispatch(logout(router))}><UploadOutlined /></button>
//         </Fragment>
//       ) : null}
//           <Image
//             src={logoShopping}
//             style={{ marginRight: "20px", borderRadius: "4px" }}
//             alt="logo"
//             height={50}
//             width={50}
//           />
//         </div>
//       </header>
//     </div>
//       <main>{children}</main>
//       <Footer />
//     </Fragment>
//   );
// }


"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { Fragment, useEffect } from "react";

import logo from "@/components/images/logo.jpg";
import logoShopping from "@/components/images/shopping-logo.jpg";
import Image from "next/image";
import { UploadOutlined } from "@ant-design/icons";

const Header = () => {
  const { isAuth, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
    useEffect(() => {
    if (!(user?.role && isAuth)) {
      router.push('/login');
    }
  })
  return (
        <div className="container">
    <header className="flex text-[white] gap-3 bc-nav">
        <div>
          <Image src={logo} alt="logo" height={50} width={50} style={{ marginRight: "20px", borderRadius: "4px", marginLeft: "20px" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link style={{ fontSize: "20px", marginRight: "10px" }} href="/"> Home </Link>
          <Link style={{ fontSize: "20px", marginRight: "10px" }} href="/about">Account</Link>
          <Link style={{ fontSize: "20px", marginRight: "10px" }} href="/products"> Users </Link>
          <Link style={{ fontSize: "20px", marginRight: "10px" }} href="/cart"> Categories </Link>
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