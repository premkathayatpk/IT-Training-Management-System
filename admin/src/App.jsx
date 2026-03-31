import React from "react";
import AppRoute from "./components/common/AppRoute";
import SideNavbar from "./components/common/SideNavbar";
import Header from "./components/common/Header";

const App = () => {
  return (
    <div className="flex flex-col">
      <Header className="fixed" />
      <div className="flex">
        <SideNavbar />

        <AppRoute />
      </div>
    </div>
  );
};

export default App;
