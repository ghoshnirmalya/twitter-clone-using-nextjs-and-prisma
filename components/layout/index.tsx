import Container from "components/layout/container";
import Navbar from "components/navbar";
import React, { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
