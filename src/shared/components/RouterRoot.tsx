//import "../App.css";
import "../../App.css";
//import type { RootState } from "./redux/store";
//import { useSelector, useDispatch } from "react-redux";
//import { decrement, increment } from "./redux/slices/counterSlice";

//import Home from "./Pages/Home";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const RouterRoot = () => {
  //const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();
  return (
    <div className="flex, flex-col h-screen">
      <Header />
      <div className="container mx-auto h-full">
        {/* <Home /> */}
        <Outlet />
      </div>
      <footer className=" bg-gray-500 mb-auto ">footer</footer>
    </div>
  );
};

export default RouterRoot;
