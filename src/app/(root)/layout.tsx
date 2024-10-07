import React from "react";

type HomeLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function HomeLayout({ children }: HomeLayoutProps) {
  return <section>{children}</section>;
}
