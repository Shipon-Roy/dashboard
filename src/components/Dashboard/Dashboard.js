import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "../Dashboard/style.css";
import dashboardImg from "../../images/menu/Chart.png";
import mapImg from "../../images/menu/map.png";
import acciuntImg from "../../images/menu/Accounts.png";
import helpImg from "../../images/menu/Help.png";
import settingsImg from "../../images/menu/Settings.png";
import manageImg from "../../images/menu/Manage.png";
import Maps from "./Maps";
import Menu from "./Menu";
import Settings from "./Settings";
import Accounts from "./Accounts";
import Helps from "./Helps";
import DashboardHome from "./DashboardHome/DashboardHome";

export default function Dashboard() {
  return (
    <div>
      <div className="row">
        <div className="col-md-2 bg-left p-3">
          <h6>Menu</h6>
          <div className="dashboard">
            <Link className="d-text" to="/">
              <li>
                <img src={dashboardImg} alt="" /> Dashboard
              </li>
            </Link>
            <Link className="d-text" to="/maps">
              <li>
                <img src={mapImg} alt="" /> Maps
              </li>
            </Link>
            <Link className="d-text" to="/menu">
              <li>
                <img src={manageImg} alt="" /> Menu
              </li>
            </Link>
            <div>
              <h5 className="mt-3">OTHERS</h5>
              <Link className="d-text" to="/settings">
                <li>
                  <img src={settingsImg} alt="" /> Settings
                </li>
              </Link>
              <Link className="d-text" to="/acounts">
                <li>
                  <img src={acciuntImg} alt="" /> Acounts
                </li>
              </Link>
              <Link className="d-text" to="/helps">
                <li>
                  <img src={helpImg} alt="" /> Helps
                </li>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-10 ">
          
          <Routes>
            <Route exact path="/" element={<DashboardHome />} />
            <Route exact path="/maps" element={<Maps />} />
            <Route exact path="/menu" element={<Menu />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route exact path="/acounts" element={<Accounts />} />
            <Route exact path="/helps" element={<Helps />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
