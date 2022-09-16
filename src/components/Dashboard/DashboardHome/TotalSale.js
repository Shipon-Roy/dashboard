import React, { useState } from "react";
import clndrImg from "../../../images/calendar.png";
import dotImg from "../../../images/dotIcon.png";
import blue1 from "../../../images/Ellipse1.png";
import blue2 from "../../../images/Ellipse2.png";
import blue3 from "../../../images/Ellipse3.png";
import arryImg from "../../../images/array.png";
import LineChart from "./chart/LineChart";
import PieChart from "./chart/PieChart";
import { UserData } from "./chart/Data";

export default function TotalSale() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Total Sale",
        data: UserData.map((data) => data.userGain),
        borderColor: "#2D5BFF",
        tension: 0.4,
        // pointStyle:'rect',
        pointBorderColor: "blue",
        // showLine:true
      },
    ],
  });
  return (
    <div className="row">
      <div className="col-md-8">
        <div className="border p-3 shadow rounded mt-3">
          <div className="d-flex items-center">
            <h6>Total Sale</h6>
            <div className="t-date d-flex">
              <p>August 2022</p>
              <span className="mx-3">
                <img src={clndrImg} alt="" />
              </span>
              <span>
                <img src={dotImg} alt="" />
              </span>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-4">
              <div className="t-brand">
                <p>TV</p>
                <h5>600.000</h5>
              </div>
              <div className="t-brand my-4">
                <p>Laptop</p>
                <h5>1.200.000</h5>
              </div>
              <div className="t-brand">
                <p>Other</p>
                <h5>210.287</h5>
              </div>
            </div>
            <div className="col-md-8">
              <div className="w-100">
                <LineChart chartData={userData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="border p-3 shadow rounded mt-3">
          <div className="d-flex items-center my-3">
            <h6>Sales Chart</h6>
            <div className="t-sales d-flex">
              <span>
                <img src={dotImg} alt="" />
              </span>
            </div>
          </div>
          <hr />
          <div className="d-flex">
            <div>
              <span className="my-3">Todays Sale</span>
              <h5>156</h5>
            </div>
            <span className="sale-today">
              Today <img style={{width: "10px", marginRight: "10px"}} src={arryImg} alt="" />
            </span>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="t-pieChart">
                <PieChart />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mt-5">
                <img className="mx-3" src={blue1} alt="" />
                <span>50% TV</span>
                <br />
                <img className="mx-3" src={blue2} alt="" />
                <span>25% Laptop</span>
                <br />
                <img className="mx-3" src={blue3} alt="" />
                <span>25% Other</span>
                <br />
                <span className="text-primary mx-3 mt-3">See details</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
