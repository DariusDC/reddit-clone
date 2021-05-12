import React from "react";
import { NavBar } from "./NavBar";
import { Wrapper } from "./Wrapper";

export type WrapperVariant = "small" | "regular";

interface LayoutProps {
  variant?: WrapperVariant;
}

const Layout: React.FC<LayoutProps> = ({ variant, children }) => {
  return (
    <>
      <NavBar />
      <Wrapper variant={variant}>{children}</Wrapper>{" "}
    </>
  );
};

export default Layout;
