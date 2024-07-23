import { Outlet, useLocation } from "react-router-dom";

const Modal = () => {
  const location = useLocation();
  {
    console.log(location);
  }
  return location.state ? (
    // <div
    //   style={{
    //     background: "red",
    //     position: "absolute",
    //     top: 0,
    //   }}
    // >
    //   Modal
    // </div>
    <Outlet />
  ) : (
    <p>123</p>
  );
};

export default Modal;
