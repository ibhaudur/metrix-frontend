import React from "react";
import Navbar from "./Navbar";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <div className="d-flex">
        <Container
          fluid
          className="
         bg-[#FAFFFE] p-3 mt-4rem"
        >
          <Outlet />
        </Container>
      </div>
    </div>
  );
};

export default Layout;
