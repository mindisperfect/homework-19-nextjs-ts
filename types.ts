import React from "react";

export interface CategoryTypes {
  _id: string;
  name: string;
  image: { url: string };
}

export interface LayoutType {
  children: React.ReactNode;
}

export interface User {
  role: number;
  firstName: string;
  lastName: string;
  username: string;
  phoneNumber: string;
}

export interface ProducType {
  image: { url: string };
  title: string;
  sold: string;
  description: string;
  price: number;
}
