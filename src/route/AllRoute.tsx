import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Layout = React.lazy(() => import("../layout"));
const Dashboard = React.lazy(() => import("../pages/Dashboard"));

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AllRoute;
