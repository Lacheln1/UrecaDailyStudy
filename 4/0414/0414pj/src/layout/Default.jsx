import React from "react";
import Header from "../organism/Header";
import { Outlet } from "react-router-dom";
import Footer from "../organism/Footer";
import { Suspense } from "react";

const Default = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default Default;
