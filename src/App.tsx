import "./App.css";
//!not used Component, look on RouterRoot component

//import type { RootState } from "./redux/store";
//import { useSelector, useDispatch } from "react-redux";
//import { decrement, increment } from "./redux/slices/counterSlice";

//import Home from "./Pages/Home";
import Header from "./shared/components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  //const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();
  return (
    <div className="flex, flex-col h-screen">
      <Header />
      <div className="container mx-auto h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
