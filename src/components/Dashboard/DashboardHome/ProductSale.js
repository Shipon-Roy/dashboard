import React from "react";
import tvImg from "../../../images/tv.png";
import jpImg from "../../../images/jp.png";
import mbImg from "../../../images/mb.png";
import calenderImg from "../../../images/calendar.png";
import carImg from "../../../images/cars.png";
import sunImg from "../../../images/Light.png";

export default function ProductSale() {
  return (
    <div className="my-3">
      <div className="row">
        <div className="col-md-6">
          <div className="border p-3 shadow rounded">
            <h3>Most Popular Product</h3>
            <div className="p-card mt-3">
              <img src={tvImg} alt="" />
              <div className="p-cardText">
                <h6>OnePlus TV 44 Inch</h6>
                <span>10% Increase</span>
              </div>
              <p className="p-tk">5k</p>
            </div>
            <hr />
            <div className="p-card">
              <img src={mbImg} alt="" />
              <div className="p-cardText">
                <h6>UMI Smartphone</h6>
                <span>17% Increase</span>
              </div>
              <p className="p-tk">4.5k</p>
            </div>
            <hr />
            <div className="p-card">
              <img src={jpImg} alt="" />
              <div className="p-cardText">
                <h6>Chuwi Laptop</h6>
                <span>20% Increase</span>
              </div>
              <p className="p-tk">2k</p>
            </div>
            <hr />
            <div className="p-card">
              <img src={jpImg} alt="" />
              <div className="p-cardText">
                <h6>Oneplut TV Y1G</h6>
                <span>1% Increase</span>
              </div>
              <p className="p-tk">1.5k</p>
            </div>
            <hr />
            <div className="p-card">
              <img src={jpImg} alt="" />
              <div className="p-cardText">
                <h6>Earphone</h6>
                <span className="text-danger">-1% Increase</span>
              </div>
              <p className="p-tk">1.4k</p>
            </div>
            <hr />
            <div className="p-card">
              <img src={jpImg} alt="" />
              <div className="p-cardText">
                <h6>Charger</h6>
                <span className="text-danger">-5% Increase</span>
              </div>
              <p className="p-tk">1.3k</p>
            </div>
            <hr />
            <div className="p-card">
              <img src={jpImg} alt="" />
              <div className="p-cardText">
                <h6>Cable</h6>
                <span className="text-danger">-50% Increase</span>
              </div>
              <p className="p-tk">1.2k</p>
            </div>
            <hr />
            <div className="p-card">
              <img src={jpImg} alt="" />
              <div className="p-cardText">
                <h6>Electric Car</h6>
                <span className="text-danger">-5% Increase</span>
              </div>
              <p className="p-tk">900</p>
            </div>
            <hr />
            <div className="p-card">
              <img src={jpImg} alt="" />
              <div className="p-cardText">
                <h6>ERP Software</h6>
                <span>5% Increase</span>
              </div>
              <p className="p-tk">870</p>
            </div>
            <hr />
            <div className="p-card">
              <img src={jpImg} alt="" />
              <div className="p-cardText">
                <h6>Attendance System</h6>
                <span>6% Increase</span>
              </div>
              <p className="p-tk">720</p>
            </div>
            <hr />
            <p className="text-primary">See More...</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="border p-3 shadow rounded">
            <h6>Sale</h6>
            <div className="d-flex align-items-center">
              <div className="s-card">
                <p>Monthly Sales</p>
                <h3>918</h3>
              </div>
              <div className="s-calndr">
                <span>September 2022</span>
                <img src={calenderImg} alt="" />
              </div>
            </div>
            <div className="mt-5">
              <div className="p-card mt-3">
                <img src={carImg} alt="" />
                <div className="p-cardText">
                  <h6>Chuwi Laptop</h6>
                  <span>21/09/2022 - Israfil Arif</span>
                </div>
                <p className="p-tk text-primary">Details</p>
              </div>
              <hr />
              <div className="p-card mt-3">
                <img src={carImg} alt="" />
                <div className="p-cardText">
                  <h6>OnePlus TV</h6>
                  <span>20/09/2022 - Debashish</span>
                </div>
                <p className="p-tk text-primary">Details</p>
              </div>
              <hr />
              <div className="p-card mt-3">
                <img src={carImg} alt="" />
                <div className="p-cardText">
                  <h6>UMI Phone</h6>
                  <span>16/09/2022 - J Sajib</span>
                </div>
                <p className="p-tk text-primary">Details</p>
              </div>
              <hr />
            </div>
          </div>

          <div className="border p-3 mt-3 shadow rounded">
            <h6>Weather</h6>
            <div className="row mt-3">
                <div className="col-md-5">
                    <div className="text-center">
                    <h5>08:21 AM</h5>
                    <img className="my-0" src={sunImg} alt="" />
                    <p>Cloudy Sunny, 24°C</p>
                    </div>
                </div>
                <div className="col-md-7">
                    <p>Wed, 21 September 2022</p>
                    <ul>
                        <li>10:00 AM - Light Rain, 27°C</li>
                        <li>01:00 PM - Cloudy Sunny, 27°C</li>
                        <li>04:00 PM - Cloudy, 27°C</li>
                        <li>05:00 PM - Cloudy, 25°C</li>
                        <li>08:00 PM - Cloudy, 25°C</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
