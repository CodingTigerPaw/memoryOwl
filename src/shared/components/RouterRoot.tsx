//import "../App.css";
import "../../App.css";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const RouterRoot = () => {
  return (
    <div className="flex, flex-col h-screen">
      <Header />
      <div className="container mx-auto h-full">
        <Outlet />
      </div>
      {/* <footer className=" bg-gray-500 mb-auto ">footer</footer> */}
    </div>
  );
};

export default RouterRoot;
