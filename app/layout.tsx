// "use client";

// import { ReduxProvider } from "@/redux/provider";
// import { Inter } from "next/font/google";
// import { LayoutType } from "@/types";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import "../globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({ children }: <LayoutType />) {
//   return (
//     <html lang="en">
//       <head>
//         <title>E-commerce</title>
//       </head>
//       <body className={inter.className}>
//         <ReduxProvider>{children}</ReduxProvider>
//       </body>
//     </html>
//   );
// }

"use client";

import React from "react";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { LayoutType } from "@/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { store } from "@/redux/store";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce",
  description: "E-commerce site for shops",
};


export default function RootLayout({ children }: LayoutType) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Provider>
  );
}