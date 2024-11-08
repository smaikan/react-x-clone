import Messages from "../components/home/messages";
import LeftBar from "./LeftBar";

import RightBar from "./RightBar";
import "./layout.css";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="main">
      <LeftBar />
      <div className="rightdouble">
        <div className="akis">
          <Outlet />
        </div>

        <RightBar />

        <Messages/>
      </div>
    </div>
  );
}
